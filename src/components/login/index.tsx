import {Button, Checkbox, Grid, TextField} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './login.css'

function Login() {
  const label = {inputProps: {'aria-label': 'Checkbox demo'}}
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/')
  }
  return (
    <Grid>
      <Grid item xs={12} container justifyContent='center'>
        <img
          src='/img/logo.png'
          alt='logo'
          style={{marginTop: '4rem', marginBottom: '3rem'}}
        />
      </Grid>
      <Grid item xs={12} container justifyContent={'center'}>
        <Grid>
          <p className='label-input'>Email</p>
          <TextField
            id='outlined-basic'
            style={{width: '500px'}}
            variant='outlined'
          />
        </Grid>
      </Grid>

      <Grid item xs={12} container justifyContent={'center'}>
        <Grid>
          <p className='label-input'>비밀번호</p>
          <TextField
            id='outlined-basic'
            style={{width: '500px'}}
            variant='outlined'
          />
        </Grid>
      </Grid>

      <Grid item xs={12} container justifyContent={'center'}>
        <Grid
          width='500px'
          container
          justifyContent='space-between'
          margin='1rem 0'
        >
          <Grid>
            <Checkbox
              {...label}
              defaultChecked
              style={{margin: 0, padding: 0}}
            />
            <span>저장하기</span>
          </Grid>
          <Link to='/abc'>비밀번호를 잊나요?</Link>
        </Grid>
      </Grid>

      <Grid item xs={12} container justifyContent={'center'}>
        <Button
          onClick={handleSubmit}
          style={{width: '500px', height: '3rem'}}
          variant='contained'
        >
          로그인
        </Button>
      </Grid>

      <Grid item xs={12} container justifyContent={'center'}>
        <Grid width='500px' container>
          <Grid item xs={5} borderBottom='1px solid #E1E1E1' height='1.9rem' />
          <Grid item xs={2}>
            <p style={{textAlign: 'center'}}>Or</p>
          </Grid>
          <Grid item xs={5} borderBottom='1px solid #E1E1E1' height='1.9rem' />
        </Grid>
      </Grid>

      <Grid item xs={12} container justifyContent={'center'}>
        다른 계정으로 로그인하기
      </Grid>

      <Grid item xs={12} container justifyContent={'center'}>
        <Grid
          container
          borderBottom='1px solid #E1E1E1'
          width='400px'
          justifyContent='space-between'
          padding='1rem'
        >
          <img src='/img/chrome.png' alt='facebook' />
          <img src='/img/kakao_talk.png' alt='talk' />
          <div style={{position: 'relative'}}>
            <img
              src='/img/Logo Container.png'
              alt='background'
              style={{width: '55px', height: '55px', marginTop: '6px'}}
            />
            <img
              src='/img/Vector.png'
              alt='facebook'
              style={{position: 'absolute', top: '25%', left: '35%'}}
            />
          </div>
          <img src='/img/image 128.png' alt='N-icon' />
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent={'center'}>
        <Grid width='500px'>
          <p style={{textAlign: 'center'}}>체험단계정이 없나요?</p>
        </Grid>
      </Grid>

      <Grid item xs={12} container justifyContent={'center'}>
        <Button
          onClick={handleSubmit}
          style={{width: '500px', height: '3rem'}}
          variant='outlined'
        >
          가입하기
        </Button>
      </Grid>
    </Grid>
  )
}
export default Login
