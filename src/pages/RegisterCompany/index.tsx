import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import React from 'react'

import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined'
import './register-company.css'
import AddIcon from '@mui/icons-material/Add'
import UploadFile from '../../components/UploadFile'
import InputPassWord from '../../components/CustomInputBase'

const RegisterCompany = () => {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }
  return (
    <Grid item xs={12} container justifyContent={'center'} paddingTop='2rem'>
      <Grid
        width='600px'
        style={{padding: '1rem 5.5rem'}}
        container
        border='1px solid  #D1D1D1'
      >
        <Grid item xs={12}>
          <p className='rc-title'>집주인회원 가입하기</p>
        </Grid>
        <Grid item xs={12}></Grid>
        <p className='rc-p1'>모든 정보를 입력하세요</p>
        <Grid item xs={12}>
          <p className='rc-p2'>대표이미지 및 업체 이름</p>
        </Grid>
        <Grid item xs={12} className='rc-grid-img' container>
          <UploadFile />
          <Grid item xs={12}>
            <p className='rc-p3'>Tên công ty...</p>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <p className='rc-p2'>계정정보</p>
          <p className='rc-pc1'>업체 사이트</p>
          <TextField
            className='rc-input'
            id='outlined-basic'
            variant='outlined'
            size='small'
            placeholder='회사의 사이트를 입력하세요'
            inputProps={{
              style: {
                height: '31px',
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <p className='rc-pc1'>업체의 주제및 제목</p>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={age}
            onChange={handleChange}
            sx={{width: '100%', height: '48px'}}
          >
            <MenuItem value='Food'>Food</MenuItem>
            {/* <MenuItem value={20}>MB</MenuItem>
            <MenuItem value={30}>Viettin</MenuItem> */}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <p className='rc-pc1'>사업자 등록번호</p>
          <TextField
            className='rc-input'
            id='outlined-basic'
            variant='outlined'
            size='small'
            placeholder='123-455-609'
            inputProps={{
              style: {
                height: '31px',
              },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <p className='rc-pc1'>설립연도</p>
          <TextField
            className='rc-input'
            id='outlined-basic'
            variant='outlined'
            size='small'
            placeholder='Ví dụ: 2017'
            inputProps={{
              style: {
                height: '31px',
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <p className='rc-p4'>타겟 청중</p>
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
                label='여성'
              />
              <FormControlLabel value='무관' control={<Radio />} label='무관' />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <p className='rc-p2'>계정정보</p>
          <p className='rc-p4'>대표의 연락처</p>
          <Grid item xs={12}>
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={9}>
                <TextField
                  className='rc-input'
                  id='outlined-basic'
                  variant='outlined'
                  size='small'
                  placeholder='연락처를 입력하세요'
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
                className='rc-input'
                id='outlined-basic'
                variant='outlined'
                size='small'
                placeholder='인증번호를 입력하세요'
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
            <p className='rc-pc1'>이메일</p>
            <TextField
              className='rc-input'
              id='outlined-basic'
              variant='outlined'
              size='small'
              placeholder='이메일을 입력하세요'
              inputProps={{
                style: {
                  height: '31px',
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <p className='rc-pc1'>비밀번호</p>
            <TextField
              className='rc-input'
              id='outlined-basic'
              variant='outlined'
              size='small'
              placeholder='비밀번호'
              inputProps={{
                style: {
                  height: '31px',
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <p className='rc-pc1'>비밀번호를 한번더 입력하세요</p>
            <TextField
              className='rc-input'
              id='outlined-basic'
              variant='outlined'
              size='small'
              placeholder='비밀번호를 입력하세요'
              inputProps={{
                style: {
                  height: '31px',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} container justifyContent='end'>
            <Button
              variant='contained'
              style={{
                width: '100px',
                height: '48px',
                backgroundColor: '#0078FF',
                marginTop: '3rem',
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

export default RegisterCompany
