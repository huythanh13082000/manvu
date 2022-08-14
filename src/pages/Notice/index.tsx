import {Grid} from '@mui/material'
import React from 'react'
import CardBase from '../../components/card'
import './Notice.css'

const Notice = () => {
  return (
    <Grid>
      <p className='Notice-title'>나의 캠페인</p>
      <Grid item xs={12} container>
        <Grid>{/* <CardBase width='255px' height='355px' /> */}</Grid>
        {/* <Grid>
          <CardBase width='255px' height='355px' />
        </Grid>
        <Grid>
          <CardBase width='255px' height='355px' />
        </Grid>

        <Grid>
          <CardBase width='255px' height='355px' />
        </Grid>
        <Grid>
          <CardBase width='255px' height='355px' />
        </Grid>
        <Grid>
          <CardBase width='255px' height='355px' />
        </Grid> */}
      </Grid>
    </Grid>
  )
}

export default Notice
