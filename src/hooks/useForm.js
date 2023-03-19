import { useState } from 'react'

export default function useForm(inputDefaultValues) {
  const [values, setValues] = useState(inputDefaultValues)

  const handleChange = (event) => {
    const { value, name } = event.target
    setValues({ ...values, [name]: value })
  }
  const resetValues = () => {
    setValues(inputDefaultValues)
  }
  return { values, handleChange, setValues, resetValues }
}
