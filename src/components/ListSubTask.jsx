import { Input, List, Box, Divider, IconButton, HStack } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import PropTypes from "prop-types"
import SubTask from "./SubTask"
import { useState } from "react"
import { nanoid } from "nanoid"

const ListSubTask = ({ task, addSubTask }) => {
  const [title, setTitle] = useState("")

  function addNewSubTask() {
    addSubTask(task.id, { id: nanoid(), title: title, completed: false })
  }

  return (
    <Box mt={4}>
      <HStack>
        <Input
          placeholder="Añadir SubTask"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="flushed"
          w="50%"
          ml={8}
          mb={3}
        />
        <IconButton
          onClick={addNewSubTask}
          colorScheme="green"
          aria-label="Add database"
          icon={<AddIcon />}
        />
      </HStack>

      {task.subTasks.length!==0 &&
        task.subTasks.map((subTask) => {
          return (
            <List spacing={3} ml={2} key={`${subTask.title}-${task.id}`}>
              <SubTask subTask={subTask} />
              <Divider />
            </List>
          )
        })
      }
    </Box>
  )
}

ListSubTask.propTypes = {
  task: PropTypes.object,
  addSubTask: PropTypes.func.isRequired,
}

export default ListSubTask
