import {Grid} from '@mui/material'
import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import EastIcon from '@mui/icons-material/East'
import './home.css'

const Home = () => {
  return (
    <Grid container marginTop='6rem'>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12} container spacing={2} padding='0 3rem'>
        <Grid item xs={8} container>
          <img src='/img/home-img1.png' alt='img1' width='100%' />
        </Grid>
        <Grid item xs={4} container>
          <Grid item xs={12}>
            <img src='/img/home-img2.png' alt='img2' width='100%' />
          </Grid>
          <Grid item xs={12} paddingTop='7px'>
            <img
              src='/img/home-img3.png'
              alt='img3'
              width='100%'
              height='100%'
            />
          </Grid>
        </Grid>
      </Grid>

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
          <p className='h-p3'>
            모두 보기 <EastIcon />
          </p>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default Home
