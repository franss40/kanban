import { Text, SimpleGrid, Button, ButtonGroup, Box } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { DeleteIcon, RepeatIcon } from "@chakra-ui/icons"

const SubTask = ({ idTask, subTask, changeState, deleteSubTask }) => {
  if (!subTask) return
  const shapeText = subTask.completed ? "del" : "b"
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
            <Button leftIcon={<DeleteIcon />} colorScheme="blue" onClick={() => deleteSubTask(idTask, subTask.id)}>
              Borrar
            </Button>
            <Button leftIcon={<RepeatIcon />} colorScheme="blue" onClick={() => changeState(idTask, subTask.id)}>
              {subTask.completed ? "Inactivo" : "activo"}
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
  changeState: PropTypes.func.isRequired,
  deleteSubTask: PropTypes.func.isRequired
}

export default SubTask
