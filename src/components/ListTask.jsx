import Task from "./Task"
import ListSubTask from "./ListSubTask"
import PropTypes from "prop-types"
import { Box, ListItem, List, Text, Center } from "@chakra-ui/react"

const ListTask = ({ datas }) => {

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
        <Task task={task} />
        <ListSubTask task={task} />
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

ListTask.propTypes = {
  datas: PropTypes.array.isRequired
}

export default ListTask
