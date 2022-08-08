import {Close} from '@mui/icons-material'
import {
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextareaAutosize,
  TextField,
  Tooltip,
} from '@mui/material'
import React from 'react'
import LayOut from '../layout'
import './CreateCampaign.css'
const CreateCampaign = () => {
  return (
    <LayOut>
      <Grid
        padding='6rem 4rem'
        bgcolor='#F6F6F6'
        container
        justifyContent='center'
      >
        <Grid
          item
          border='1px solid #D1D1D1'
          borderRadius='5px'
          bgcolor='white'
          container
          padding='4rem'
          width='1500px'
        >
          <Grid
            container
            item
            xs={12}
            justifyContent='space-between'
            alignItems='center'
          >
            <p className='ccp-title'>나의 캠페인</p>
            <Tooltip title='close'>
              <IconButton>
                <Close
                  style={{
                    border: '1px solid #4D4D4D',
                    borderRadius: '50%',
                    padding: '4px',
                  }}
                />
              </IconButton>
            </Tooltip>
          </Grid>

          <Grid container item xs={12} spacing={2}>
            <Grid item xs={6}>
              <Grid item xs={12}>
                <p className='ccp-input'>제목</p>
                <TextField
                  className='r-input'
                  id='outlined-basic'
                  variant='outlined'
                  size='small'
                  placeholder='제목을 입력하세요'
                  inputProps={{
                    style: {
                      height: '31px',
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <p className='ccp-input'>체험단 제공사항 설명</p>
                <TextField
                  className='r-input'
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
                <p className='ccp-input'>제공내역</p>
                <TextareaAutosize
                  className='ccp-textarea'
                  aria-label='minimum height'
                  minRows={3}
                  placeholder='내용을 입력하세요'
                />
              </Grid>

              <Grid item xs={12}>
                <p className='ccp-input'>제공내역</p>
                <TextareaAutosize
                  className='ccp-textarea'
                  aria-label='minimum height'
                  minRows={3}
                  placeholder='내용을 입력하세요'
                />
              </Grid>

              <Grid item xs={12}>
                <p className='ccp-input'>추가 정보</p>
                <TextareaAutosize
                  className='ccp-textarea'
                  aria-label='minimum height'
                  minRows={3}
                  placeholder='내용을 입력하세요'
                />
              </Grid>

              <Grid item xs={12}>
                <p className='ccp-input'>Điều khoản và yêu cầu</p>
                <TextareaAutosize
                  className='ccp-textarea'
                  aria-label='minimum height'
                  minRows={3}
                  placeholder='내용을 입력하세요'
                />
              </Grid>

              <Grid item xs={12}>
                <p className='ccp-input'>추가 정보</p>
                <TextareaAutosize
                  className='ccp-textarea'
                  aria-label='minimum height'
                  minRows={3}
                  placeholder='내용을 입력하세요'
                />
              </Grid>
              <Grid item xs={12}>
                <p className='ccp-p1'>어떤 미디어에 광고를 만들고 싶습니까?</p>
                <Grid container>
                  <RadioGroup
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'
                  >
                    <Grid item xs={12} container>
                      <Grid item xs={4}>
                        <FormControlLabel
                          value='Facebook'
                          control={<Radio />}
                          label='Facebook'
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlLabel
                          value='Instagram'
                          control={<Radio />}
                          label='Instagram'
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlLabel
                          value='Twitter'
                          control={<Radio />}
                          label='Twitter'
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlLabel
                          value='Tiktok'
                          control={<Radio />}
                          label='Tiktok'
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlLabel
                          value='Youtube'
                          control={<Radio />}
                          label='Youtube'
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <FormControlLabel
                          value='Blog Naver'
                          control={<Radio />}
                          label='Blog Naver'
                        />
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LayOut>
  )
}

export default CreateCampaign
