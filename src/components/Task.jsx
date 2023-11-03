import PropTypes from "prop-types"
import {
  Box,
  Text,
  Heading,
  Divider,
  Tag,
  HStack,
  Select,
  Button,
} from "@chakra-ui/react"
import { DeleteIcon, InfoIcon } from "@chakra-ui/icons"
import { StarIcon } from "@chakra-ui/icons"

const Task = ({ task, changeState, deleteTask }) => {

  const state = task.state

  function onChangeState(e) {
    const newValue = e.target.value
    changeState(task.id, newValue)
  }

  return (
    <Box>
      <Heading size="md" color="red.500">
        {task.title}
      </Heading>
      <Text>{task.text}</Text>

      <HStack spacing={2} mt={2}>
        <Tag colorScheme="blue" variant="outline">
          <StarIcon />
          &nbsp;{task.priority}
        </Tag>
        <Tag colorScheme="blue" variant="outline">
          <InfoIcon />
          &nbsp;{task.state}
        </Tag>
        <Box>
          <Select
            size="xs"
            borderColor="green"
            color="yellow.500"
            defaultValue={state}
            onChange={onChangeState}
          >
            <option value="Requested">Requested</option>
            <option value="In Process">In Process</option>
            <option value="Done">Done</option>
          </Select>
        </Box>
        <Button leftIcon={<DeleteIcon />} colorScheme="red" size="sm" onClick={ () => deleteTask(task.id) }>
          Eliminar
        </Button>
      </HStack>

      <Divider mt={6} />
    </Box>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  changeState: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default Task
