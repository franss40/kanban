import { Box, Input } from "@chakra-ui/react"
import PropTypes from "prop-types"

const Busqueda = ({ filterSearch, onFilterSearch }) => {
  

  function changeSearch(e) {
    onFilterSearch(e.target.value)
  }

  return (
    <Box mt={5} w="100%">
        <Input
          placeholder="Busqueda"
          value={filterSearch}
          onChange={changeSearch}
        />
    </Box>
  )
}

Busqueda.propTypes = {
  filterSearch: PropTypes.string.isRequired,
  onFilterSearch: PropTypes.func.isRequired
}

export default Busqueda
