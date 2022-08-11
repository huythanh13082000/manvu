import {Grid, Tab, Tabs} from '@mui/material'
import React, {useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import CardBase from '../../components/card'
import CustomSelect from '../../components/select'
import {homeActions, homeState, selectListCampaign} from '../home/homeSlice'
import LayOut from '../layout'
import './Service.css'

const Service = () => {
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const dispatch = useAppDispatch()
  const ListCampaign: homeState = useAppSelector(selectListCampaign)
  useEffect(() => {
    dispatch(homeActions.getListCampaign())
  }, [])
  let index = 0
  const styleTab = {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '24px',
    padding: '0.5rem 2rem',
    color: '#000000',
  }
  console.log('log1', ListCampaign)
  return (
    <LayOut>
      <Grid container marginTop='5rem'>
        <Grid
          item
          xs={12}
          container
          padding='0 3rem'
          alignItems='center'
          justifyContent='space-between'
        >
          <Grid>
            <p className='service-p1'>서비스</p>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justifyContent='space-between'
            borderBottom='1px solid  #E1E1E1'
          >
            <Tabs
              onChange={handleChange}
              value={value}
              aria-label='Tabs where each tab needs to be selected manually'
            >
              <Tab label='전체' style={{...styleTab}} />
              <Tab label='식당,카페' style={{...styleTab}} />
              <Tab label='여행' style={{...styleTab}} />
              <Tab label='여행' style={{...styleTab}} />
              <Tab label='오락' style={{...styleTab}} />
              <Tab label='뷰티' style={{...styleTab}} />
              <Tab label='뷰티' style={{...styleTab}} />
              <Tab label='건강' style={{...styleTab}} />
            </Tabs>
            <CustomSelect />
          </Grid>

          {value === 0 ? (
            <>
              <Grid item xs={12} container padding='0 0rem 2rem 0rem'>
                {ListCampaign.list?.map((item) => {
                  if (item.status === 2) {
                    index++
                    console.log(99999, index)
                    return (
                      <CardBase key={item.id} flag data={item} index={index} />
                    )
                  } else {
                    return null
                  }
                })}
              </Grid>

              <Grid item xs={12} container padding='0 3rem 2rem 3rem'>
                {ListCampaign.list?.map((item) => {
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
                })}
              </Grid>
            </>
          ) : null}
        </Grid>
      </Grid>
    </LayOut>
  )
}

export default Service
