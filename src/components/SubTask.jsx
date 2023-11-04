import { Text, SimpleGrid, Button, ButtonGroup, Box } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { DeleteIcon, RepeatIcon } from "@chakra-ui/icons"
import useKanbanStore from "../store/kanbanStore"

const SubTask = ({ idTask, subTask }) => {
  const { setStateSubTask, deleteSubTask } = useKanbanStore()
  if (!subTask) return
  const shapeText = subTask.completed ? "del" : "b"

  function deleteSub() {
    if (confirm('Deseas borrar este registro: \n\r' + subTask.title)) {
      deleteSubTask(idTask, subTask.id)
    }
  }

  return (
    <>
      <SimpleGrid columns={2} spacing={1}>
        <Box p="4">
          <Text as={shapeText} color="blue.400">
            {subTask.title}
          </Text>
        </Box>
        <Box p="4">
          <ButtonGroup variant="outline" spacing="6">
            <Button
              leftIcon={<DeleteIcon />}
              colorScheme="blue"
              onClick={ deleteSub }
            >
              Borrar
            </Button>
            <Button
              leftIcon={<RepeatIcon />}
              colorScheme="blue"
              onClick={() => setStateSubTask(idTask, subTask.id)}
            >
              {subTask.completed ? "Activo" : "Inactivo"}
            </Button>
          </ButtonGroup>
        </Box>
      </SimpleGrid>
    </>
  )
}

SubTask.propTypes = {
  idTask: PropTypes.string,
  subTask: PropTypes.object.isRequired,
}

export default SubTask
