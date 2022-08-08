import {
  Button,
  Checkbox,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import React from 'react'
import LayOut from '../layout'
import './WithdrawMoney.css'

const WithdrawMoney = () => {
  const label = {inputProps: {'aria-label': 'Checkbox demo'}}
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }
  return (
    <LayOut>
      <Grid
        padding='6rem 0'
        container
        justifyContent='center'
        bgcolor='#F6F6F6'
      >
        <Grid width='1000px'>
          <Grid item xs={12} container spacing={5}>
            <Grid item xs={7}>
              <Grid item xs={12}>
                <p className='wm-title'>출금</p>
                <p className='wm-p1'>출금을 위한 정보 조항</p>
              </Grid>
              <Grid item xs={12}>
                <p className='r-p4'>출금액</p>
                <TextField
                  className='r-input'
                  id='outlined-basic'
                  variant='outlined'
                  size='small'
                  placeholder='출금 금액을 입력하기'
                  inputProps={{
                    style: {
                      height: '31px',
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} container>
                <p style={{marginRight: '1rem'}} className='wm-p2'>
                  받는 은행
                </p>
                <Checkbox
                  {...label}
                  defaultChecked
                  style={{color: '#03CB5E'}}
                />
                <p className='wm-p2'>저장</p>
              </Grid>
              <Grid item xs={12}>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={age}
                  onChange={handleChange}
                  sx={{width: '100%', height: '48px'}}
                >
                  <MenuItem value={10}>Techcombank</MenuItem>
                  <MenuItem value={20}>MB</MenuItem>
                  <MenuItem value={30}>Viettin</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} margin='1rem 0'>
                <TextField
                  className='r-input'
                  id='outlined-basic'
                  variant='outlined'
                  size='small'
                  placeholder='계좌번호를 입력하기'
                  inputProps={{
                    style: {
                      height: '31px',
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <p className='r-p4'>입금주(실명)</p>
                <TextField
                  className='r-input'
                  id='outlined-basic'
                  variant='outlined'
                  size='small'
                  placeholder='이름'
                  inputProps={{
                    style: {
                      height: '31px',
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} margin='1rem 0'>
                <TextField
                  className='r-input'
                  id='outlined-basic'
                  variant='outlined'
                  size='small'
                  placeholder='계좌번호를 입력하기'
                  inputProps={{
                    style: {
                      height: '31px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <p className='wm-p3'>출금 신청기간과 입금되는 날짜</p>
                <p className='wm-p4'>1일~10일:당월 15일</p>
                <p className='wm-p4'>11일~20일:당월 25일</p>
                <p className='wm-p4'>21일~말일:익월 5일</p>
              </Grid>
              <Grid item xs={12}>
                <p className='wm-p3' style={{margin: '1rem 0'}}>
                  개인정보 이용동의
                </p>
                <Grid className='wm-grid1' height='220px' item xs={12}>
                  <Grid item xs={12} container>
                    <Checkbox
                      {...label}
                      defaultChecked
                      style={{color: '#03CB5E'}}
                    />
                    <p className='wm-p2'>
                      개인정보 취급위탁에 대해 동의합니다.
                    </p>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Checkbox
                    {...label}
                    defaultChecked
                    style={{color: '#03CB5E'}}
                  />
                  <p className='wm-p2'>개인정보 수집및 이용에 동의합니다.</p>
                </Grid>
                <Grid item xs={12} container>
                  <Button variant='contained' className='wm-button '>
                    접수하기
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5} marginTop='2rem'>
              <Grid className='pm-grid-point-current'>
                <p className='pm-grid-p1-point-current'>150,000P</p>
                <p className='pm-grid-p2-point-current'>현재 포인트</p>
                {/* <Button
                  variant='contained'
                  className='pm-grid-button-point-current'
                >
                  출금
                </Button> */}
              </Grid>
              <br />
              <Grid className='pm-grid1-point-current'>
                <p className='pm-p3-point-current'>출금 약관</p>
                <p className='pm-p4-point-current'>
                  1.포인트가 10,000원 이상 모이면 출금 신청을 할 수 있습니다.
                  2.포인트는 한 달에 3번 신청이 가능하며, 신청 마감일 5일 후
                  지급됩니다. (지급일이 공휴일인 경우, 다음 영업일에
                  지급됩니다.) 3.신청 기간 및 지급일 안내(1일~10일,당월 15일
                  지급), (11일~20일, 당월 25일 지급),(21일~말일,익일 5일 지급)
                  4.출금 금액을 지정하여 신청이 불가하며, 신청 정보와 금액
                  수정을 원 하실 경우,앞선 신청을 취소하시고 다시 신청해주세요.
                  5.입금계좌의 예금주는 반드시 실명과 동일해야 지급됩니다.
                  6.입금액은 관련 법상 사업소득에 따른 세금3.3%를 공제하고
                  입금되며, 입금된 날짜를 기준으로 소득이 발생한 것으로
                  신고됩니다. 7.명의도용 차단이 되어 있거나 나이스평가정보에서
                  사용자 정보를 불러울 수 없는 경우, 나이스평가정보의 고객상담
                  센터(1588-2486)또는 온라인 실명 등록 서비스를 이용하세요.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LayOut>
  )
}

export default WithdrawMoney
