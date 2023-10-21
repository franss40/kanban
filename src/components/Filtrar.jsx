import { Button, ButtonGroup } from "@chakra-ui/react"
import PropTypes from "prop-types"

const Filtrar = ({ filterTask, setFilterTask }) => {

  function onClick(e) {
    setFilterTask(e.target.name)
  }

  return (
    <ButtonGroup gap="2" mt={5}>
      <Button
        colorScheme="blue"
        name="Todos"
        onClick={onClick}
        variant={filterTask === "Todos" ? "outline" : "solid"}
      >
        Todos
      </Button>
      <Button
        colorScheme="pink"
        name="Requested"
        onClick={onClick}
        variant={filterTask === "Requested" ? "outline" : "solid"}
      >
        Requested
      </Button>
      <Button
        colorScheme="orange"
        name="In Process"
        onClick={onClick}
        variant={filterTask === "In Process" ? "outline" : "solid"}
      >
        In Process
      </Button>
      <Button
        colorScheme="yellow"
        name="Done"
        onClick={onClick}
        variant={filterTask === "Done" ? "outline" : "solid"}
      >
        Done
      </Button>
    </ButtonGroup>
  )
}

Filtrar.propTypes = {
  filterTask: PropTypes.string.isRequired,
  setFilterTask: PropTypes.func.isRequired,
}

export default Filtrar
