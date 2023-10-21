import { Text, Input, Box, HStack, IconButton } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { useState } from "react"
import PropTypes from "prop-types"

const AddTask = ({ onAddTask }) => {
  const initialValue = { title: "", text: "", priority: "", hasError: false }
  const [values, setValues] = useState(initialValue)

  function handleAdd(event) {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  function handleClickAdd() {
    if (
      values.priority > 5 ||
      values.priority < 1 ||
      !values.text ||
      !values.title
    )
      return
    setValues(initialValue)
    onAddTask(values)
  }

  function handleBlur() {
    const priorityRegexp = new RegExp(/^[1-5]{1}$/)
    const hasError = !priorityRegexp.test(values.priority)
    setValues({ ...values, hasError: hasError })
  }

  return (
    <Box
      mt={5}
      w="100%"
      border="1px"
      borderRadius="10px"
      p={5}
      borderColor="gray.100"
    >
      <Text>Añadir Task</Text>
      <Input
        placeholder="Título"
        name="title"
        type="text"
        onChange={handleAdd}
        value={values.title}
      />
      <Input
        placeholder="Texto"
        required
        name="text"
        type="text"
        onChange={handleAdd}
        value={values.text}
      />
      <HStack>
        <Input
          placeholder="Prioridad (1-5)"
          type="number"
          min="1"
          max="5"
          variant="filled"
          name="priority"
          onChange={handleAdd}
          onBlur={handleBlur}
          value={values.priority}
        />
        <IconButton
          type="submit"
          colorScheme="red"
          aria-label="Add database"
          icon={<AddIcon />}
          onClick={handleClickAdd}
        />
      </HStack>
      <Text mt={5} color="red" style={{ visibility: values.hasError ? "visible" : "hidden" }}>
        Por favor, introduzca un valor de priority correcto
      </Text>
    </Box>
  )
}

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
}

export default AddTask
