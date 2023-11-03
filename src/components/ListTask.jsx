import Task from "./Task"
import ListSubTask from "./ListSubTask"
import { useContext } from "react"
import { kanbanContext } from "./kanbanContext"
import { Box, ListItem, List, Text, Center } from "@chakra-ui/react"

const ListTask = () => {
  const {
    datas,
    deleteTask,
    changeState,
    addSubTask,
    setStateSubTask,
    deleteSubTask,
  } = useContext(kanbanContext)

  if (!datas.length) {
    return (
      <Box
        m={5}
        p={2}
        border="1px"
        borderRadius="10px"
        borderColor="blue"
        w="100%"
      >
        <Center>
          <Text as="b">No hay datos que mostrar</Text>
        </Center>
      </Box>
    )
  }

  const listItems = datas.map((task) => {
    return (
      <ListItem key={task.id}>
        <Task task={task} changeState={changeState} deleteTask={deleteTask} />
        <ListSubTask
          task={task}
          addSubTask={addSubTask}
          setStateSubTask={setStateSubTask}
          deleteSubTask={deleteSubTask}
        />
      </ListItem>
    )
  })

  return (
    <Box
      m={5}
      p={2}
      border="1px"
      borderRadius="10px"
      borderColor="blue"
      w="100%"
    >
      <Center>
        <Box as="b" m={8} color="blue.300">
          {datas.length} Items
        </Box>
      </Center>
      <List spacing={3} ml={2}>
        {listItems}
      </List>
    </Box>
  )
}

export default ListTask
