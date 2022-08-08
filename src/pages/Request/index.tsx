import {Add} from '@mui/icons-material'
import {Button, Grid} from '@mui/material'
import React from 'react'
import CardRequest from '../../components/CardRequest'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import './Request.css'
import DialogRequest from './Dialog'

const Request = () => {
  return (
    <Grid container>
      <Grid item xs={5} container borderRight='1px solid #E1E1E1'>
        <Grid
          item
          xs={11}
          container
          alignItems='center'
          justifyContent='space-between'
          padding='0 0.4rem'
        >
          <p className='rq-title'>1:1문의</p>
          <Button className='rq-button' variant='outlined'>
            <Add style={{fontSize: '16px'}} /> 문의작성
          </Button>
        </Grid>

        <Grid>
          <CardRequest />
          <Grid
            item
            xs={11}
            borderTop='1px solid #E1E1E1'
            marginLeft='0.5rem'
          ></Grid>
        </Grid>

        <Grid>
          <CardRequest />
          <Grid
            item
            xs={11}
            borderTop='1px solid #E1E1E1'
            marginLeft='0.8rem'
          ></Grid>
        </Grid>
        <Grid>
          <CardRequest />
          <Grid
            item
            xs={11}
            borderTop='1px solid #E1E1E1'
            marginLeft='0.8rem'
          ></Grid>
        </Grid>
        <Grid>
          <CardRequest />
          <Grid
            item
            xs={11}
            borderTop='1px solid #E1E1E1'
            marginLeft='0.8rem'
          ></Grid>
        </Grid>
        <Grid>
          <CardRequest />
          <Grid
            item
            xs={11}
            borderTop='1px solid #E1E1E1'
            marginLeft='0.8rem'
          ></Grid>
        </Grid>
        <Grid>
          <CardRequest />
          <Grid
            item
            xs={11}
            borderTop='1px solid #E1E1E1'
            marginLeft='0.8rem'
          ></Grid>
        </Grid>
      </Grid>
      <Grid item xs={7} padding='2rem 3rem'>
        <Grid
          bgcolor='#F6F6F6'
          container
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid container alignItems='center' item xs={8}>
            <img
              src='/img/avatarRequest.png'
              alt='avatar'
              style={{width: '80px', height: '80px'}}
            />
            <Grid>
              <p className='rq-p1'>우리집</p>
              <p className='rq-p2'>2021-06-05</p>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <p>
              <MoreVertOutlinedIcon style={{color: '#677294', width: '20px'}} />
            </p>
          </Grid>
        </Grid>
        <p className='rq-p3'>
          아까 입금했는데 이기명이름으로 30만원했어요 확인해주 세요.
        </p>
        <DialogRequest />
      </Grid>
    </Grid>
  )
}

export default Request
