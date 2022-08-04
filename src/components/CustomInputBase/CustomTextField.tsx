import {TextField} from '@mui/material'
import React from 'react'

const CustomTextField = () => {
  return (
    <>
      <TextField
        style={{width: '366px'}}
        className='r-input'
        id='outlined-basic'
        variant='outlined'
        size='small'
        placeholder='링크를 입력하기'
        /* styles the input component */
        inputProps={{
          style: {
            height: '31px',
          },
        }}
      />
    </>
  )
}

export default CustomTextField
