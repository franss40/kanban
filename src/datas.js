export const datos = [
  {
    id: "1",
    title: "Mostrar Listado de tareas",
    text: "primero",
    priority: 5,
    state: "Requested",
    subTasks: [
      { id: "11", title: "Nuevo Listado con CSS normal", completed: false }, 
      { id: "12", title: "otro Nuevo item", completed: false }
    ],
  },
  {
    id: "2",
    title: "Añadir tareas",
    text: "segundo",
    priority: 3,
    state: "Requested",
    subTasks: [],
  },
  {
    id: "3",
    title: "Añadir Subtareas",
    text: "tercero",
    priority: 3,
    state: "In Process",
    subTasks: [],
  },
  {
    id: "4",
    title: "Cambiar estado una tarea",
    text: "cuarto",
    priority: 4,
    state: "Requested",
    subTasks: [],
  },
  {
    id: "5",
    title: "borrar una subtarea",
    text: "quinto",
    priority: 2,
    state: "Done",
    subTasks: [],
  },
]

export const titleProject = { title: "Kanban", dateLimit: "01/12/2023" };