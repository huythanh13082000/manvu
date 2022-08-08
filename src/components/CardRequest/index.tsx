import {Grid} from '@mui/material'
import React from 'react'
import './CardRequest.css'

const CardRequest = () => {
  return (
    <Grid item xs={11} container alignItems='center'>
      <Grid item xs={3} margin='0'>
        <img src='/img/CardRequest.png' alt='img' style={{width: '100%'}} />
      </Grid>

      <Grid item xs={9}>
        <p className='cr-p1'>
          <span style={{color: '#549c1f'}}>[디자인수정] </span>
          디자인 수정해주세요. 이미지 업로드 했어...
        </p>
        <Grid container alignItems='center'>
          <p className='cr-p2'>상태:</p>
          <p className='cr-p3'>추가 질문</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CardRequest
