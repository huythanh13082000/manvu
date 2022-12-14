import {Button, Grid} from '@mui/material'
import React, {useEffect, useState} from 'react'
import EastIcon from '@mui/icons-material/East'
import './home.css'
import CardBase from '../../components/card'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LayOut from '../layout'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {homeActions, homeState, selectListCampaign} from './homeSlice'
import {Campaign} from '../../models/campaign'

const Home = () => {
  const dispatch = useAppDispatch()
  const listCampaign: homeState = useAppSelector(selectListCampaign)
  const [listTopCampaign, setListTopCampaign] = useState<Campaign[]>()
  const [limit, setLimit] = useState(10)
  useEffect(() => {
    dispatch(homeActions.getListCampaign({limit}))
  }, [dispatch, limit])
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
      <Grid container marginTop='6rem' justifyContent='center'>
        <Grid width='1300px'>
          <Grid item xs={12} container spacing={2} padding='0 0.5rem'>
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
            padding='0 0.5rem'
            alignItems='center'
            justifyContent='space-between'
          >
            <Grid>
              <p className='home-p1'>???????????? ????????????</p>
              <p className='home-p2'>????????? ??????????????? ????????????</p>
            </Grid>
            <Grid>
              <p className='home-p3'>
                ?????? ?????? <EastIcon />
              </p>
            </Grid>
          </Grid>
          <Grid item xs={12} container>
            {listTopCampaign?.map((item) => {
              if (index < 4) {
                index++
                return (
                  <Grid marginRight='0.5rem'>
                    <CardBase
                      disableMargin
                      key={item.id}
                      flag
                      data={item}
                      index={index}
                    />
                  </Grid>
                )
              } else {
                return null
              }
            })}
          </Grid>

          <Grid item xs={12} container>
            {listCampaign.list?.map((item) => {
              return (
                <Grid marginRight='0.5rem'>
                  <CardBase
                    key={item.id}
                    width='252px'
                    height='360px'
                    data={item}
                  />
                </Grid>
              )
            })}
          </Grid>
          <Grid width='98.5%' margin='3rem 0.5rem'>
            <Button
              className='home-load-more'
              variant='outlined'
              onClick={() => {
                setLimit(limit + 10)
                // dispatch(homeActions.getListCampaign({limit: limit + 10}))
              }}
            >
              ??? ?????? <ExpandMoreIcon />
            </Button>
          </Grid>

          {/* <Grid
            item
            width={'98.5%'}
            margin='3rem 0.5rem'
            paddingTop='4rem'
            paddingBottom='4rem'
            paddingLeft='8px'
            bgcolor='#eaeaea'
            container
          >
            <Grid width='300px' margin='0.5rem' paddingLeft='3rem'>
              <p className='home-p4'>120+</p>
              <p className='home-p5'>????????? ????????????</p>
              <p className='home-p6'>????????? ??????????????? ????????????</p>
              <Button
                variant='contained'
                disableElevation
                className='home-button'
              >
                ?????? ??????
              </Button>
            </Grid>

            {listCampaign.list.map((item) => {
              if (item.status === 1) {
                return (
                  <Grid width='300px' margin='0.5rem'>
                    <CardCampaign data={item} />
                  </Grid>
                )
              } else return null
            })}
          </Grid> */}

          {/* <Grid
            item
            xs={12}
            container
            padding='0 0.5rem'
            alignItems='center'
            justifyContent='space-between'
          >
            <Grid>
              <p className='home-p1'>???????????????</p>
              <p className='home-p2'>?????????????????? ????????????</p>
            </Grid>
            <Grid>
              <p className='home-p3'>
                ?????? ?????? <EastIcon />
              </p>
            </Grid>
          </Grid> */}

          {/* <Grid item xs={12} container>
            {listCampaign.list?.map((item) => {
              if (
                moment(item.announcementFinalDate).format() < moment().format()
              )
                return (
                  <Grid marginRight='0.5rem'>
                    <CardBase
                      key={item.id}
                      width='252px'
                      height='380px'
                      data={item}
                    />
                  </Grid>
                )
              else return null
            })}
          </Grid> */}
          {/* <Grid item xs={12} padding='3rem 0.5rem 2rem 0.5rem'>
            <Button className='home-load-more' variant='outlined'>
              ??? ?????? <ExpandMoreIcon />
            </Button>
          </Grid> */}
        </Grid>
      </Grid>
    </LayOut>
  )
}

export default Home
