import {Grid} from '@mui/material'
import React from 'react'
import './point.css'

const Point = () => {
  return (
    <Grid>
      <Grid item xs={12} container alignItems='center' width='100%'>
        <Grid item xs={8}>
          <Grid item xs={12} container alignItems='center'>
            <p className='point-p1'>09:47 am 29/07/2022</p>
            <img src='/img/N.png' alt='img' className='point-img' />
            <p className='point-p5'>Blog</p>
            <p className='point-p2'>음식</p>
          </Grid>
          <Grid item xs={12}>
            <p className='point-p3'>
              군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다.
            </p>
          </Grid>
        </Grid>
        <Grid item xs={4} container justifyContent='end'>
          <p className='point-p4'> +5000P</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Point
