import React, { useEffect, useState } from 'react'
import {
Button,
Flex } from '@chakra-ui/react'
const Slider = ({show, onPage, total}) => {
  const  [counter, setCounter] = useState(1)

  useEffect(() =>{
    const value = show * counter
    onPage(value - show, value)
  }, [counter])

  const onbButtonClick = (type) => {
    if(type === "prev"){
      if(counter === 1){
        setCounter(1)
      } else{
        setCounter(counter - 1)
      }
    } else if (type === "next"){
      if (Math.ceil(total/show) === counter){
        setCounter(counter)
      } else {
        setCounter(counter + 1)
      }
    }
  }
  return (
<>
<Flex justifyContent={'space-between'}>
<Button
onClick={() => onbButtonClick('prev')}>
  Previous
</Button>
<Button
onClick={() => onbButtonClick('next')}>
  Next
</Button>
</Flex>
</>
 
  )
}

export default Slider