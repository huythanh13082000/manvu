import {Button, Grid, TextField} from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'

const ForgotPW = () => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/')
  }

  return (
    <Grid container justifyContent='center'>
      <Grid item xs={12} container justifyContent='center' width='422px'>
        <img
          src='/img/logo.png'
          alt='logo'
          style={{
            marginTop: '4rem',
            marginBottom: '1rem',
            width: '68px',
            height: '68px',
          }}
        />
      </Grid>
      <Grid item xs={12} container justifyContent='center' width='422px'>
        <p
          style={{
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '155%',
          }}
        >
          비밀번호를 잊어버리셨나요?
        </p>
      </Grid>

      <Grid item xs={12} container justifyContent='center'>
        <p
          style={{
            width: '421px',
            textAlign: 'center',
            fontWeight: 400,
            fontSize: 18,
            lineHeight: '155%',
          }}
        >
          가입할때 사용한 이메일 주소를 입력하시면 비밀번호 재설정 안내 메일을
          보내드립니다.
        </p>
      </Grid>
      <Grid item xs={12} container justifyContent={'center'}>
        <Grid>
          <p className='label-input'>Email</p>
          <TextField
            id='outlined-basic'
            style={{width: '421px'}}
            variant='outlined'
            size='small'
            placeholder='이메일을 입력해주세요.'
            inputProps={{
              style: {
                height: '31px',
              },
            }}
          />
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
    </Grid>
  )
}

export default ForgotPW
