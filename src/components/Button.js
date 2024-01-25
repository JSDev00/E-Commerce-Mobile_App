import React from 'react'
import { Button } from 'native-base'

const Buttons = ({mt,bg,color,children,onPress}) => {
  return (
    <Button 
        w="full"
        h={55}
        mt={mt}
        bg={bg}
        rounded="full"
        _text={{ color:color,fontWeight:"bold" }}
        _pressed={{ onPress }}
    >
        {children}
        </Button>
  )
}

export default Buttons
