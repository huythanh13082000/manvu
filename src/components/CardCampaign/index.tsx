import {Grid} from '@mui/material'
import React from 'react'
import './CardCampaign.css'

const CardCampaign = () => {
  return (
    <Grid
      className='cc-grid'
      style={{
        backgroundImage: `url("/img/campaign.png")`,
        padding: '1rem 1rem',
      }}
    >
      <Grid>
        <Grid container item xs={12} alignItems='center'>
          <img
            src='/img/instagram2.png'
            alt='instagram'
            style={{
              marginRight: '0.5rem',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
            }}
          />
          <p className='cc-p1'>Review đăng bài</p>
        </Grid>
        <p className='cc-p2'>
          CHAM SPA - Tặng 500.000đ tiền mặt và voucher massage trị giá
        </p>
        <p className='cc-p3'>Láng Hạ, Hà Nội</p>
        <p className='cc-p4'>Cần 20 reviewer</p>
      </Grid>
    </Grid>
  )
}

export default CardCampaign
