import {Button, Grid} from '@mui/material'
import React, {useEffect, useState} from 'react'
import EastIcon from '@mui/icons-material/East'
import './home.css'
import CardBase from '../../components/card'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CardCampaign from '../../components/CardCampaign'
import LayOut from '../layout'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {homeActions, homeState, selectListCampaign} from './homeSlice'
import {Campaign} from '../../models/campaign'

const Home = () => {
  const dispatch = useAppDispatch()
  const listCampaign: homeState = useAppSelector(selectListCampaign)
  const [listTopCampaign, setListTopCampaign] = useState<Campaign[]>()
  useEffect(() => {
    dispatch(homeActions.getListCampaign())
  }, [])
  let index = 0
  useEffect(() => {
    setListTopCampaign(
      listCampaign.list
        .filter((item) => item.view !== 0)
        .sort((a, b) => {
          return a.view - b.view
        })
    )
  }, [listCampaign])
  return (
    <LayOut>
      <Grid container marginTop='6rem'>
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
          // justifyContent='space-between'
          padding='0 3rem 2rem 3rem'
        >
          {listTopCampaign?.map((item) => {
            if (index < 4) {
              index++
              return <CardBase key={item.id} flag data={item} index={index} />
            } else {
              return null
            }
          })}
        </Grid>

        <Grid item xs={12} container padding='0 3rem 2rem 3rem'>
          {listCampaign.list?.map((item) => {
            if (item.status === 1)
              return (
                <Grid margin='0 0.9rem'>
                  <CardBase
                    key={item.id}
                    width='255px'
                    height='345px'
                    data={item}
                  />
                </Grid>
              )
            else return null
          })}
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

          {listCampaign.list.map((item) => {
            if (item.status === 2) {
              return (
                <Grid margin='1rem'>
                  <CardCampaign data={item} />
                </Grid>
              )
            }
          })}
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

        <Grid item xs={12} container padding='0 3rem 2rem 3rem'>
          {listCampaign.list.map((item) => {
            if (item.status === 0) {
              return <CardBase width='255px' height='345px' />
            }
          })}
        </Grid>
        <Grid item xs={12} padding='0 3rem 2rem 3rem'>
          <Button className='h-load-more' variant='outlined'>
            더 보기 <ExpandMoreIcon />
          </Button>
        </Grid>
      </Grid>
    </LayOut>
  )
}

export default Home
