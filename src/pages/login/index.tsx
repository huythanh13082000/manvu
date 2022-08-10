import {Button, Checkbox, Grid, TextField} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {authActions, selectIsLoggedIn, selectloginFail} from './authSlice'
import './login.css'
import ErrorIcon from '@mui/icons-material/Error'

function Login() {
  const label = {inputProps: {'aria-label': 'Checkbox demo'}}
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const isLogin = useAppSelector(selectIsLoggedIn)
  // const isLogging = useAppSelector(selectIsLogging)
  const loginFail = useAppSelector(selectloginFail)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'username') {
      setUsername(event.target.value)
    } else {
      setPassword(event.target.value)
    }
  }

  useEffect(() => {
    if (isLogin) {
      navigate('/')
    }
  }, [isLogin])

  const handleSubmit = async () => {
    dispatch(
      authActions.login({
        username: username,
        password: password,
      })
    )
  }
  return (
    <Grid>
      <Grid item xs={12} container justifyContent='center'>
        <img
          src='/img/logo.png'
          alt='logo'
          style={{
            marginTop: '4rem',
            marginBottom: '2rem',
            width: '68px',
            height: '68px',
          }}
        />
      </Grid>
      <Grid item xs={12} container justifyContent={'center'}>
        <Grid>
          <p className='label-input'>Email</p>
          <TextField
            name='username'
            id='outlined-basic'
            value={username}
            onChange={handleChange}
            style={{width: '422px'}}
            variant='outlined'
            size='small'
            inputProps={{
              style: {
                height: '31px',
              },
            }}
            placeholder='Greenapp@gmail.com'
          />
        </Grid>
      </Grid>

      <Grid item xs={12} container justifyContent={'center'}>
        <Grid>
          <p className='label-input'>비밀번호</p>
          <TextField
            value={password}
            name='password'
            id='outlined-basic'
            style={{width: '422px'}}
            variant='outlined'
            size='small'
            type='password'
            onChange={handleChange}
            placeholder='Ví dụ: Greenapp123'
            inputProps={{
              style: {
                height: '31px',
              },
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent='center'>
        {loginFail ? (
          <p className='login-p-error'>
            <ErrorIcon /> Hãy kiểm tra lại có thể sai tên đăng nhập hoặc mật
            khẩu
          </p>
        ) : null}
      </Grid>
      <Grid item xs={12} container justifyContent={'center'}>
        <Grid
          width='
          422px'
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
            <span style={{fontSize: '14px', fontWeight: 500}}>저장하기</span>
          </Grid>

          <Link
            to='/login/forgotpassword'
            style={{color: '#0065F2', fontSize: '14px'}}
          >
            비밀번호를 잊나요?
          </Link>
        </Grid>
      </Grid>

      <Grid item xs={12} container justifyContent={'center'} margin='1.5rem 0'>
        <Button
          onClick={handleSubmit}
          style={{
            width: '422px',
            height: '2.8rem',
            boxShadow: ' 0px 4px 12px -4px #4C98ED',
            fontSize: '15px',
          }}
          variant='contained'
        >
          로그인
        </Button>
      </Grid>

      <Grid item xs={12} container justifyContent={'center'}>
        <Grid width='422px' container>
          <Grid item xs={5} borderBottom='1px solid #E1E1E1' height='1.5rem' />
          <Grid item xs={2}>
            <p style={{textAlign: 'center', fontSize: '13px'}}>Or</p>
          </Grid>
          <Grid item xs={5} borderBottom='1px solid #E1E1E1' height='1.5rem' />
        </Grid>
      </Grid>

      <Grid item xs={12} container justifyContent={'center'} fontSize='15px'>
        다른 계정으로 로그인하기
      </Grid>

      <Grid item xs={12} container justifyContent={'center'}>
        <Grid
          container
          borderBottom='1px solid #E1E1E1'
          width='422px'
          justifyContent='space-around'
          padding='1rem'
        >
          <img src='/img/chrome.png' alt='facebook' />
          <img src='/img/kakao_talk.png' alt='talk' />
          <div style={{position: 'relative'}}>
            <img
              src='/img/bg-facebook.png'
              alt='background'
              style={{width: '55px', height: '55px', marginTop: '6px'}}
            />
            <img
              src='/img/facebook.png'
              alt='facebook'
              style={{position: 'absolute', top: '26%', left: '36%'}}
            />
          </div>
          <img src='/img/image 128.png' alt='N-icon' />
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent={'center'}>
        <Grid width='422px'>
          <p style={{textAlign: 'center', fontSize: '15px'}}>
            체험단계정이 없나요?
          </p>
        </Grid>
      </Grid>

      <Grid item xs={12} container justifyContent={'center'}>
        <Button
          // onClick={() => handleSubmit}
          style={{width: '422px', height: '2.8rem', fontSize: '15px'}}
          variant='outlined'
        >
          가입하기
        </Button>
      </Grid>
    </Grid>
  )
}
export default Login
