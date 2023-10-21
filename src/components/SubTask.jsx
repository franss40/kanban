import { Text, SimpleGrid, Button, ButtonGroup, Box } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { DeleteIcon, RepeatIcon } from "@chakra-ui/icons"

const SubTask = ({ subTask }) => {
  if (!subTask) return
  return (
    <>
      <SimpleGrid columns={2} spacing={1}>
        <Box p="4">
          <Text as="b" color="green">
            {subTask.title}
          </Text>
        </Box>
        <Box p="4">
          <ButtonGroup variant="outline" spacing="6">
            <Button leftIcon={<DeleteIcon />} colorScheme="blue">
              Borrar
            </Button>
            <Button leftIcon={<RepeatIcon />} colorScheme="blue">
              Estado
            </Button>
          </ButtonGroup>
        </Box>
      </SimpleGrid>
    </>
  )
}

SubTask.propTypes = {
  subTask: PropTypes.object.isRequired,
}

export default SubTask
