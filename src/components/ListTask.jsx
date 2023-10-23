import PropTypes from "prop-types"
import { Box, ListItem, List, Text, Center } from "@chakra-ui/react"
import Task from "./Task"
import ListSubTask from "./ListSubTask"

const ListTask = ({ datos, deleteTask, filterSearch, filterTask, changeState, addSubTask, setStateSubTask }) => {

  // filterTask: string (request, process, done, todos)
  function returnFilterDates(filterTask) {
    let returnDatas = []
    const posibleDatas = ['Requested', 'In Process', 'Done']
    if (posibleDatas.includes(filterTask)) {
      datos.forEach(item => {
        if (item.state === filterTask) returnDatas.push(item)
      })
    } else {
      returnDatas = datos
    }
    return returnDatas
  }

  let filterDatas = []

  if (filterSearch) {
    datos.forEach((item) => {
      const title = item.title
      if (title.toUpperCase().indexOf(filterSearch.toUpperCase()) !== -1)
        filterDatas.push(item)
    })
  } else {
    filterDatas = returnFilterDates(filterTask)
  }

  if (!filterDatas.length) {
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
  
  const listItems = filterDatas.map((task) => {
    return (
      <ListItem key={task.id}>
        <Task task={task} changeState={changeState} deleteTask={deleteTask} />
        <ListSubTask
          task={task}
          addSubTask={addSubTask}
          setStateSubTask={setStateSubTask}
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
        <Box as="b" m={8} color="blue.300">{filterDatas.length} Items</Box>
      </Center>
      <List spacing={3} ml={2}>
        {listItems}
      </List>
    </Box>
  )
}

ListTask.propTypes = {
  datos: PropTypes.array.isRequired,
  filterSearch: PropTypes.string.isRequired,
  filterTask: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  addSubTask: PropTypes.func.isRequired,
  setStateSubTask: PropTypes.func.isRequired
}

export default ListTask
