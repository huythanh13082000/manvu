import {Grid} from '@mui/material'
import React from 'react'
import {FILE_API} from '../../apis/urlConfig'
import {Campaign} from '../../models/campaign'
import './CardCampaign.css'

interface Props {
  data: Campaign
}

const CardCampaign = (props: Props) => {
  const mediaImg: any = {
    blog_naver: '/img/N.png',
    tiktok: '/img/tiktok-img.png',
    youtube: '/img/youtube-img.png',
    instagram: '/img/Instagram-img.png',
  }
  return (
    <Grid position='relative'>
      <Grid
        bgcolor='black'
        position='absolute'
        width='100%'
        height='300px'
        style={{opacity: '0.5'}}
        borderRadius='5px'
      ></Grid>
      <Grid
        className='cc-grid'
        style={{
          backgroundImage: `url("${FILE_API}${props.data?.images}")`,
          padding: '1rem 1rem',
        }}
      >
        <Grid position='relative'>
          <Grid container item xs={12} alignItems='center'>
            <Grid>
              <img
                src={mediaImg[`${props.data?.media}`]}
                style={{width: '20px', marginRight: '5px'}}
                alt='N'
              />
            </Grid>
            <Grid>
              <p className='cc-p1'>{props.data?.media}</p>
            </Grid>
          </Grid>
          <p className='cc-p2'>
            CHAM SPA - Tặng 500.000đ tiền mặt và voucher massage trị giá
          </p>
          <p className='cc-p3'>{props.data.adddress}</p>
          <p className='cc-p4'>Cần 20 reviewer</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CardCampaign
