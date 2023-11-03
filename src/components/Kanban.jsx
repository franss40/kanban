import { titleProject } from "../datas.js"
import Busqueda from "./Busqueda"
import AddTask from "./AddTask"
import Filtrar from "./Filtrar"
import ListTask from "./ListTask"
import { useState } from "react"
import { returnFilterDatas, returnSearchDatas } from "./utils.js"
import useKanbanStore from "../store/kanbanStore.js"
import { kanbanContext } from "./kanbanContext";
import {
  Box,
  Container,
  Heading,
  Spacer,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react"

export default function Kanban() {
  
  const [searchTask, setSearchTask] = useState("")
  const [filterTask, setFilterTask] = useState("Todos")
  const titulo = `{ ${titleProject.title} }`

  const {data, addTask, changeState, deleteTask, addSubTask, setStateSubTask, deleteSubTask} = useKanbanStore(state => state)
  
  // Calculamos los datos filtrados
  let datas = returnFilterDatas(data, filterTask)
  datas = returnSearchDatas(datas, searchTask)

  return (
    <kanbanContext.Provider
      value={{
        datas,
        addTask,
        changeState,
        deleteTask,
        addSubTask,
        setStateSubTask,
        deleteSubTask,
      }}
    >
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
        <ListTask />
      </Container>
    </kanbanContext.Provider>
  )
}
