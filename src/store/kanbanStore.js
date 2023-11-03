import { create } from "zustand"
import { datos } from "../datas.js"
import { nanoid } from "nanoid"

const useKanbanStore = create((set, get) => ({
  data: datos,

  // Add Task
  addTask: (values) =>
    set((state) => ({
      data: [
        ...state.data,
        {
          id: nanoid(),
          title: values.title,
          text: values.text,
          priority: values.priority,
          state: "Requested",
          subTasks: [],
        },
      ],
    })),

  // Cambiar el estado de un Task (Requested, In Process, Done)
  changeState: (id, newState) => {
    let newItem
    const data = get().data
    const newDate = data.map((item) => {
      item.id === id
        ? (newItem = { ...item, state: newState })
        : (newItem = item)
      return newItem
    })
    return set({ data: newDate })
  },

  // Borrar task
  deleteTask: (id) => {
    const datas = get().data
    const newDatos = datas.filter((item) => item.id !== id)
    return set({ data: newDatos })
  },

  // Add subTask
  addSubTask: (id, task) => {
    const datas = get().data
    const newData = datas.map((item) => {
      if (item.id === id) {
        return { ...item, subTasks: item.subTasks.concat(task) }
      } else {
        return item
      }
    })
    return set({ data: newData })
  },

  // Cambiar estado de un subTask (True, false)
  setStateSubTask: (idTask, idSubTask) => {
    const datas = get().data
    const newElement = datas.map((item) => {
      if (item.id === idTask) {
        const subNewElement = item.subTasks.map((subItem) => {
          if (subItem.id === idSubTask) {
            return { ...subItem, completed: !subItem.completed }
          } else {
            return subItem
          }
        })
        return { ...item, subTasks: subNewElement }
      } else {
        return item
      }
    })
    return set({ newElement })
  },

  //Borrar subTask
  deleteSubTask: (idTask, idSubTask) => {
    const datas = get().data
    const newElement = datas.map((item) => {
      if (item.id === idTask) {
        const subNewElement = item.subTasks.filter(
          (subItem) => subItem.id !== idSubTask
        )
        return { ...item, subTasks: subNewElement }
      } else {
        return item
      }
    })
    return set({ newElement })
  },
}))

export default useKanbanStore
