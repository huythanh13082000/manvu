import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import React from 'react'
import UploadFile from '../UploadFile'
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined'
import './register.css'
import InputPassWord from '../CustomInputBase'
import AddIcon from '@mui/icons-material/Add'

const Register = () => {
  return (
    <Grid item xs={12} container justifyContent={'center'} paddingTop='2rem'>
      <Grid
        width='600px'
        style={{padding: '1rem 5.5rem'}}
        container
        border='1px solid  #D1D1D1'
      >
        <Grid item xs={12}>
          <p className='r-title'>체험단 회원가입</p>
        </Grid>
        <Grid item xs={12}></Grid>
        <p className='r-p1'>모든 정보를 입력하세요</p>
        <Grid item xs={12}>
          <p className='r-p2'>대표 이미지 및 아이디</p>
        </Grid>
        <Grid item xs={12} className='r-grid-img' container>
          <UploadFile />

          <Grid item xs={12}>
            <p className='r-p3'>계정이름...</p>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <p className='r-p2'>계정 키워드</p>
          <TextField
            className='r-input'
            id='outlined-basic'
            variant='outlined'
            size='small'
            placeholder='이메일을 입력해주세요.'
          />
        </Grid>
        <Grid item xs={12}>
          <p className='r-p2'>회원정보</p>
          <p className='r-p4'>연락처</p>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={9}>
              <TextField
                className='r-input'
                id='outlined-basic'
                variant='outlined'
                size='small'
                placeholder='전화번호를 입력하기.'
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                variant='outlined'
                style={{
                  width: '100%',
                  height: '40px',
                  color: '#0065F2',
                  border: '1px solid #CFCFCF',
                  padding: 0,
                }}
              >
                <Grid container justifyContent='center'>
                  <ForwardToInboxOutlinedIcon style={{fontSize: '16px'}} />
                  <Grid item xs={12}></Grid>
                  <span
                    style={{
                      fontSize: '12px',
                    }}
                  >
                    인증
                  </span>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={9}>
            <TextField
              className='r-input'
              id='outlined-basic'
              variant='outlined'
              size='small'
              placeholder='OTP 코드 입력'
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant='contained'
              style={{
                width: '100%',
                height: '40px',
                backgroundColor: '#0078FF',
              }}
            >
              확인
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <p className='r-p4'>Email</p>
          <TextField
            className='r-input'
            id='outlined-basic'
            variant='outlined'
            size='small'
            placeholder='이메일을 입력하기'
          />
        </Grid>

        <Grid item xs={12}>
          <p className='r-p4'>비번</p>
          <InputPassWord />
        </Grid>

        <Grid item xs={12}>
          <p className='r-p4'>비밀번호를 한번더 입력하기</p>
          <InputPassWord />
        </Grid>

        <Grid item xs={12}>
          <p className='r-p4'>성별</p>
          <FormControl>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='male'
              name='radio-buttons-group'
              row
            >
              <FormControlLabel value='male' control={<Radio />} label='남성' />
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='여자'
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <p className='r-p4'>남성</p>
          <Button
            // onClick={handleSubmit}
            style={{
              width: '422px',
              height: '48px',
              fontSize: '14px',
              border: '#CECECE 1px solid',
              fontWeight: 700,
              color: ' #015BD7',
            }}
            variant='outlined'
          >
            <AddIcon /> 주소를 추가하기
          </Button>
        </Grid>

        <Grid item xs={12}>
          <p className='r-p2'>SNS계정을 연결하기</p>
          <Grid item xs={12}>
            <p>Facebook</p>
            <Grid item xs={12} container>
              <Grid className='r-grid-nocial-network' textAlign='center'>
                <img
                  src='/img/Vector.png'
                  alt='facebook'
                  style={{margin: '13px'}}
                />
              </Grid>
              <TextField
                style={{width: '366px'}}
                className='r-input'
                id='outlined-basic'
                variant='outlined'
                size='small'
                placeholder='이메일을 입력하기'
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Register
