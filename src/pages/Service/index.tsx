import {Grid} from '@mui/material'
import React from 'react'
import CardBase from '../../components/card'
import LayOut from '../layout'

const Service = () => {
  return (
    <LayOut>
      <Grid container marginTop='6rem'>
        <Grid
          item
          xs={12}
          container
          padding='0 3rem'
          alignItems='center'
          justifyContent='space-between'
        >
          <Grid>
            <p className='h-p1'>캠페인을 진행예정</p>
            <p className='h-p2'>캠페인 진행예정을 설명하기</p>
          </Grid>
          <Grid>
            <p className='h-p3'>{/* 모두 보기 <EastIcon /> */}</p>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          justifyContent='space-between'
          padding='0 3rem 2rem 3rem'
        >
          <CardBase flag />
          <CardBase flag />
          <CardBase flag />
          <CardBase flag />
          <CardBase flag />
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent='space-between'
          padding='0 3rem 2rem 3rem'
        >
          <CardBase width='255px' height='423px' />
          <CardBase width='255px' height='423px' />
          <CardBase width='255px' height='423px' />
          <CardBase width='255px' height='423px' />
          <CardBase width='255px' height='423px' />
          <CardBase width='255px' height='423px' />
          <CardBase width='255px' height='423px' />
          <CardBase width='255px' height='423px' />
          <CardBase width='255px' height='423px' />
          <CardBase width='255px' height='423px' />
          <CardBase width='255px' height='423px' />
          <CardBase width='255px' height='423px' />
        </Grid>
      </Grid>
    </LayOut>
  )
}

export default Service
