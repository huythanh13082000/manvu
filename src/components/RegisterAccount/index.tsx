import {Button, Grid} from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import './register-account.css'
import {useNavigate} from 'react-router-dom'

const RegisterAccount = () => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/register')
  }
  return (
    <Grid container justifyContent='center' height='100vh'>
      <Grid width='1440px' height='900px' alignSelf='center' container>
        <Grid item xs={6} padding='10rem 3rem 0 3rem'>
          <img src='/img/logo.png' alt='logo' />
          <p className='ra-title'>회원가입</p>
          <p className='ra-p1'>회원종류 선택하세요</p>
          <Button
            className='ra-button'
            variant='outlined'
            style={{color: '#292929'}}
            sx={{
              ':hover': {
                bgcolor: '#0078FF', // theme.palette.primary.main
                color: 'white',
              },
            }}
            onClick={handleSubmit}
          >
            <Grid
              className='ra-bgrid'
              container
              justifyContent='space-between'
              padding='0 3rem 0 1rem'
              sx={{
                ':hover': {
                  transition: '0.2s',
                  paddingRight: '1rem',
                },
              }}
            >
              체험단 회원 <ChevronRightIcon />
            </Grid>
          </Button>
          <Button
            style={{color: '#292929'}}
            className='ra-button'
            variant='outlined'
            sx={{
              ':hover': {
                bgcolor: '#0078FF', // theme.palette.primary.main
                color: 'white',
              },
            }}
          >
            <Grid
              className='ra-bgrid'
              container
              justifyContent='space-between'
              padding='0 3rem 0 1rem'
              sx={{
                ':hover': {
                  transition: '0.2s',
                  paddingRight: '1rem',
                },
              }}
            >
              체험단 회원 <ChevronRightIcon />
            </Grid>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img src='/img/background-manvu.png' alt='bgrough' />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default RegisterAccount
