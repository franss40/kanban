import { datos, titleProject } from "../datas.js"
import Busqueda from "./Busqueda"
import AddTask from "./AddTask"
import Filtrar from "./Filtrar"
import ListTask from "./ListTask"
import {
  Box,
  Container,
  Heading,
  Spacer,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react"
import { useState } from "react"
import { nanoid } from "nanoid"

export default function Kanban() {
  const titulo = `{ ${titleProject.title} }`
  const [datas, setdatas] = useState(datos)
  const [searchTask, setSearchTask] = useState("")
  const [filterTask, setFilterTask] = useState("Todos")

  function addTask(values) {
    setdatas([
      ...datas,
      {
        id: nanoid(),
        title: values.title,
        text: values.text,
        priority: values.priority,
        state: "Requested",
        subTasks: [],
      },
    ])
  }

  function changeState(id, newState) {
    let newItem
    const newDate = datas.map((item) => {
      item.id === id
        ? (newItem = { ...item, state: newState })
        : (newItem = item)
      return newItem
    })
    setdatas(newDate)
  }

  function deleteTask(id) {
    if (confirm("¿Quieres Borrar este registro con id " + id + "?")) {
      const newDatos = datas.filter((item) => item.id !== id)
      setdatas(newDatos)
    }
  }

  function addSubTask(id, task) {
    const newData = datas.map(item => {
      if (item.id === id) {
        return {...item, subTasks: item.subTasks.concat(task)}
      } else {
        return item
      }
    })
    setdatas(newData)
  }

  return (
    <Container
      centerContent
      maxW="container.xl"
      mt={2}
      border="1px"
      borderColor="blue.200"
    >
      <Flex w="100%">
        <Box p="4">
          <Heading color="blue.600">{titulo}</Heading>
        </Box>
        <Spacer />
        <Center p="4">
          <Text as="b" color="Tomato">
            {titleProject.dateLimit}
          </Text>
        </Center>
      </Flex>

      <Busqueda filterSearch={searchTask} onFilterSearch={setSearchTask} />
      <AddTask onAddTask={addTask} />
      <Filtrar filterTask={filterTask} setFilterTask={setFilterTask} />
      <ListTask
        datos={datas}
        setDatos={setdatas}
        filterSearch={searchTask}
        filterTask={filterTask}
        changeState={changeState}
        deleteTask={deleteTask}
        addSubTask= {addSubTask}
      />
    </Container>
  )
}
