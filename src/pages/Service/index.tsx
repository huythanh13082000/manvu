import {Grid, Tab, Tabs} from '@mui/material'
import React from 'react'
import CardBase from '../../components/card'
import LayOut from '../layout'
import './Service.css'

const Service = () => {
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const styleTab = {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '24px',
    padding: '0.5rem 2rem',
    color: '#000000',
  }
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
            <p className='s-p1'>서비스</p>
          </Grid>
          <Grid item xs={12}>
            <Tabs
              onChange={handleChange}
              value={value}
              aria-label='Tabs where each tab needs to be selected manually'
              style={{
                borderBottom: '1px solid #C4C4C4',
              }}
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
          </Grid>

          {value === 0 ? (
            <>
              <Grid
                item
                xs={12}
                container
                justifyContent='space-between'
                padding='0 0rem 2rem 0rem'
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
              </Grid>
            </>
          ) : null}
        </Grid>
      </Grid>
    </LayOut>
  )
}

export default Service
