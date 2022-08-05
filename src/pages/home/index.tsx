import {Button, Grid} from '@mui/material'
import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import EastIcon from '@mui/icons-material/East'
import './home.css'
import CardBase from '../../components/card'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CardCampaign from '../../components/CardCampaign'

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
        {/* <CardBase width='249px' height='423px' /> */}
      </Grid>
      <Grid item xs={12} padding='0 3rem 2rem 3rem'>
        <Button className='h-load-more' variant='outlined'>
          더 보기 <ExpandMoreIcon />
        </Button>
      </Grid>

      <Grid
        item
        xs={12}
        padding='4rem 3rem'
        bgcolor=' #D1D1D1'
        container
        justifyContent='space-between'
      >
        <Grid width='317px' margin='1rem'>
          <p className='h-p4'>120+</p>
          <p className='h-p5'>캠페인 진행예정</p>
          <p className='h-p6'>캠페인 진행예정을 설명하기</p>
          <Button variant='contained' disableElevation className='h-button'>
            모두 보기
          </Button>
        </Grid>

        <Grid margin='1rem'>
          <CardCampaign />
        </Grid>
        <Grid margin='1rem'>
          <CardCampaign />
        </Grid>
        <Grid margin='1rem'>
          <CardCampaign />
        </Grid>
        <Grid margin='1rem'>
          <CardCampaign />
        </Grid>
        <Grid margin='1rem'>
          <CardCampaign />
        </Grid>
        <Grid margin='1rem'>
          <CardCampaign />
        </Grid>
        <Grid margin='1rem'>
          <CardCampaign />
        </Grid>
        <Grid margin='1rem'>
          <CardCampaign />
        </Grid>
        <Grid margin='1rem'>
          <CardCampaign />
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
          <p className='h-p1'>추전캠페인</p>
          <p className='h-p2'>추전캠페인을 설명하기</p>
        </Grid>
        <Grid>
          <p className='h-p3'>
            모두 보기 <EastIcon />
          </p>
        </Grid>
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
        {/* <CardBase width='249px' height='423px' /> */}
      </Grid>
      <Grid item xs={12} padding='0 3rem 2rem 3rem'>
        <Button className='h-load-more' variant='outlined'>
          더 보기 <ExpandMoreIcon />
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default Home
