import {Add} from '@mui/icons-material'
import {Button, Grid, Tab, Tabs} from '@mui/material'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import CardCompany from '../../components/CardCompany'
import './campaign.css'

const CompanyCampaign = () => {
  const [value, setValue] = useState(0)
  const navigate = useNavigate()
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const styleTab = {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#585858',
    padding: '0.5rem 3rem',
  }
  const handleCreateCP = () => {
    navigate('/createcampaign')
  }

  return (
    <Grid>
      <Grid container justifyContent='space-between'>
        <p className='cp-title'>나의 캠페인</p>
        <Button
          variant='outlined'
          className='cp-button'
          onClick={handleCreateCP}
        >
          <Add /> 캠페인을 생성
        </Button>
      </Grid>

      <Tabs
        onChange={handleChange}
        value={value}
        aria-label='Tabs where each tab needs to be selected manually'
        style={{borderBottom: '1px solid #C4C4C4'}}
      >
        <Tab label='전체' style={{...styleTab}} />
        <Tab label='진행중' style={{...styleTab}} />
        <Tab label='수정' style={{...styleTab}} />
        <Tab label='완료' style={{...styleTab}} />
      </Tabs>
      {value === 0 ? (
        <>
          <Grid item xs={12} container>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>

            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
          </Grid>
        </>
      ) : null}

      {value === 1 ? (
        <>
          <Grid item xs={12} container>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>

            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
          </Grid>
        </>
      ) : null}
      {value === 2 ? (
        <>
          <Grid item xs={12} container>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>

            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
          </Grid>
        </>
      ) : null}
      {value === 3 ? (
        <>
          <Grid item xs={12} container>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>

            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardCompany width='255px' height='355px' />
            </Grid>
          </Grid>
        </>
      ) : null}
    </Grid>
  )
}

export default CompanyCampaign
