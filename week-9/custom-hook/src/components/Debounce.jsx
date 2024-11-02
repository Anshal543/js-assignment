import React from 'react'

const useDebounce = (value,delay) => {
    const [debauncedValue, setDebauncedValue] = React.useState(value)
    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebauncedValue(value)
        },delay)
        return () => {
            clearTimeout(handler)
        }
    },[value,delay])
  return (
    debauncedValue
  )
}

export default useDebounce