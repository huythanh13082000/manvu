import {Button, Grid} from '@mui/material'
import React from 'react'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import './CardChannel.css'

const CardChannel = () => {
  return (
    <Grid
      container
      padding='1rem'
      width='410px'
      border='1px solid #E1E1E1'
      borderRadius='5px'
    >
      <Grid item xs={2}>
        <img
          src='/img/avarta.png'
          alt='avatar'
          style={{width: '48px', height: '48px'}}
        />
      </Grid>
      <Grid item xs={6}>
        <p className='ccn-p1'>Albert Flores</p>
        <p className='ccn-p2'>#foodVN</p>
        <p className='ccn-p3'>
          <CheckCircleOutlineOutlinedIcon
            style={{width: '15px', color: '#1BB650'}}
          />
          12:36 02/08/2022
        </p>
      </Grid>
      <Grid item xs={4} container justifyContent='end'>
        <Button variant='outlined' className='ccn-b1'>
          포스팅 보기
        </Button>
        <Button variant='contained' className='ccn-b2'>
          수정요청
        </Button>
      </Grid>
    </Grid>
  )
}

export default CardChannel
