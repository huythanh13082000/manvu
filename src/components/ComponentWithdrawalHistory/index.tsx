import {Grid} from '@mui/material'
import React from 'react'
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined'
import './WithdrawalHistory.css'

const ComponentWH = () => {
  return (
    <Grid>
      <Grid item xs={12} container alignItems='center' width='100%'>
        <Grid item xs={8}>
          <Grid item xs={12} container alignItems='center'>
            <p className='point-p1'>09:47 am 29/07/2022</p>
            <p className='wh-p1'>
              <HourglassEmptyOutlinedIcon />
            </p>
            <p className='wh-p1'>처리중</p>
          </Grid>
          <Grid item xs={12}>
            <p className='point-p3'>
              군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다.
            </p>
          </Grid>
        </Grid>
        <Grid item xs={4} container justifyContent='end' alignItems='end'>
          <p className='point-p4'>5000P</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ComponentWH
