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
            inputProps={{
              style: {
                height: '31px',
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <p className='r-p2'>회원정보</p>
          <p className='r-p4'>연락처</p>
          <Grid item xs={12}>
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={9}>
                <TextField
                  className='r-input'
                  id='outlined-basic'
                  variant='outlined'
                  size='small'
                  placeholder='전화번호를 입력하기.'
                  inputProps={{
                    style: {
                      height: '31px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant='outlined'
                  style={{
                    width: '100%',
                    height: '48px',
                    color: '#0065F2',
                    border: '1px solid #CFCFCF',
                    padding: 0,
                  }}
                >
                  <Grid>
                    <Grid>
                      <ForwardToInboxOutlinedIcon style={{fontSize: '16px'}} />
                    </Grid>
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
          <Grid item xs={12} container spacing={2} marginTop='0.2rem'>
            <Grid item xs={9}>
              <TextField
                className='r-input'
                id='outlined-basic'
                variant='outlined'
                size='small'
                placeholder='OTP 코드 입력'
                inputProps={{
                  style: {
                    height: '31px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                variant='contained'
                style={{
                  width: '100%',
                  height: '48px',
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
              inputProps={{
                style: {
                  height: '31px',
                },
              }}
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
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='남성'
                />
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
            <Grid width='422px'>
              <Grid item xs={12}>
                <p className='r-p5'>Facebook</p>
                <Grid item xs={12} container margin='1rem 0'>
                  <Grid
                    className='r-grid-facebook'
                    textAlign='center'
                    style={{marginRight: '7px'}}
                  >
                    <img
                      src='/img/facebook.png'
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
                    placeholder='링크를 입력하기'
                    /* styles the input component */
                    inputProps={{
                      style: {
                        height: '31px',
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <p className='r-p5'>Instagram</p>
                <Grid item xs={12} container margin='1rem 0'>
                  <Grid
                    className='r-grid-instagram'
                    textAlign='center'
                    style={{marginRight: '7px'}}
                  >
                    <img
                      src='/img/instagram.png'
                      alt='instagram'
                      style={{margin: '13px'}}
                    />
                  </Grid>
                  <TextField
                    style={{width: '366px'}}
                    className='r-input'
                    id='outlined-basic'
                    variant='outlined'
                    size='small'
                    placeholder='링크를 입력하기'
                    /* styles the input component */
                    inputProps={{
                      style: {
                        height: '31px',
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <p className='r-p5'>Blog Naver</p>
                <Grid item xs={12} container margin='1rem 0'>
                  <Grid
                    className='r-grid-N'
                    textAlign='center'
                    style={{marginRight: '7px'}}
                  ></Grid>
                  <TextField
                    style={{width: '366px'}}
                    className='r-input'
                    id='outlined-basic'
                    variant='outlined'
                    size='small'
                    placeholder='링크를 입력하기'
                    /* styles the input component */
                    inputProps={{
                      style: {
                        height: '31px',
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <p className='r-p5'>Tiktok</p>
                <Grid item xs={12} container margin='1rem 0'>
                  <Grid
                    className='r-grid-tiktok'
                    textAlign='center'
                    style={{marginRight: '7px'}}
                  >
                    <img
                      src='/img/tiktok.png'
                      alt='instagram'
                      style={{margin: '13px'}}
                    />
                  </Grid>
                  <TextField
                    style={{width: '366px'}}
                    className='r-input'
                    id='outlined-basic'
                    variant='outlined'
                    size='small'
                    placeholder='링크를 입력하기'
                    /* styles the input component */
                    inputProps={{
                      style: {
                        height: '31px',
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <p className='r-p5'>Twitter</p>
                <Grid item xs={12} container margin='1rem 0'>
                  <Grid
                    className='r-grid-twitter'
                    textAlign='center'
                    style={{marginRight: '7px'}}
                  >
                    <img
                      src='/img/twitter.png'
                      alt='instagram'
                      style={{margin: '13px'}}
                    />
                  </Grid>
                  <TextField
                    style={{width: '366px'}}
                    className='r-input'
                    id='outlined-basic'
                    variant='outlined'
                    size='small'
                    placeholder='링크를 입력하기'
                    /* styles the input component */
                    inputProps={{
                      style: {
                        height: '31px',
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <p className='r-p5'>Youtube</p>
                <Grid item xs={12} container margin='1rem 0'>
                  <Grid
                    className='r-grid-youtube'
                    textAlign='center'
                    style={{marginRight: '7px'}}
                  >
                    <img
                      src='/img/youtube.png'
                      alt='instagram'
                      style={{marginTop: '13px'}}
                    />
                  </Grid>
                  <TextField
                    style={{width: '366px'}}
                    className='r-input'
                    id='outlined-basic'
                    variant='outlined'
                    size='small'
                    placeholder='링크를 입력하기'
                    /* styles the input component */
                    inputProps={{
                      style: {
                        height: '31px',
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} container justifyContent='end'>
            <Button
              variant='contained'
              style={{
                width: '100px',
                height: '48px',
                backgroundColor: '#0078FF',
              }}
            >
              계속하기
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Register
