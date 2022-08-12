import {Button, Grid, Tab, Tabs} from '@mui/material'
import React from 'react'
import ComponentWH from '../../components/ComponentWithdrawalHistory'
import Point from '../../components/CardPoint'
import './PointManagement.css'
import {useNavigate} from 'react-router-dom'

const PointManagement = () => {
  const navagate = useNavigate()
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const handleClick = () => {
    navagate('/WithdrawMoney')
  }
  const styleTab = {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#585858',
    padding: '0.5rem 3rem',
    width: '50%',
  }
  return (
    <Grid>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={7}>
          <p className='cp-title'>나의 캠페인</p>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label='Tabs where each tab needs to be selected manually'
            style={{
              borderBottom: '1px solid #C4C4C4',
            }}
          >
            <Tab label='적립' style={{...styleTab}} />
            <Tab label='출금내역' style={{...styleTab}} />
          </Tabs>
          {value === 0 ? (
            <>
              <Grid padding='1rem 0 '>
                <Point />
              </Grid>
              <Grid className='pm-grid-border'></Grid>

              <Grid padding='1rem 0 '>
                <Point />
              </Grid>
              <Grid className='pm-grid-border'></Grid>

              <Grid padding='1rem 0 '>
                <Point />
              </Grid>
              <Grid className='pm-grid-border'></Grid>

              <Grid padding='1rem 0 '>
                <Point />
              </Grid>
              <Grid className='pm-grid-border'></Grid>

              <Grid padding='1rem 0 '>
                <Point />
              </Grid>
              <Grid className='pm-grid-border'></Grid>

              <Grid padding='1rem 0 '>
                <Point />
              </Grid>
            </>
          ) : null}
          {value === 1 ? (
            <>
              <Grid padding='1rem 0 '>
                <ComponentWH />
              </Grid>
              <Grid className='pm-grid-border'></Grid>
              <Grid padding='1rem 0 '>
                <ComponentWH />
              </Grid>
              <Grid className='pm-grid-border'></Grid>
              <Grid padding='1rem 0 '>
                <ComponentWH />
              </Grid>
              <Grid className='pm-grid-border'></Grid>
              <Grid padding='1rem 0 '>
                <ComponentWH />
              </Grid>
              <Grid className='pm-grid-border'></Grid>
              <Grid padding='1rem 0 '>
                <ComponentWH />
              </Grid>
            </>
          ) : null}
        </Grid>
        <Grid item xs={5} marginTop='2rem'>
          <Grid className='pm-grid-point-current'>
            <p className='pm-grid-p1-point-current'>150,000P</p>
            <p className='pm-grid-p2-point-current'>현재 포인트</p>
            <Button
              variant='contained'
              className='pm-grid-button-point-current'
              onClick={handleClick}
            >
              출금
            </Button>
          </Grid>
          <br />
          <Grid className='pm-grid1-point-current'>
            <p className='pm-p3-point-current'>출금 약관</p>
            <p className='pm-p4-point-current'>
              1.포인트가 10,000원 이상 모이면 출금 신청을 할 수 있습니다.
              2.포인트는 한 달에 3번 신청이 가능하며, 신청 마감일 5일 후
              지급됩니다. (지급일이 공휴일인 경우, 다음 영업일에 지급됩니다.)
              3.신청 기간 및 지급일 안내(1일~10일,당월 15일 지급), (11일~20일,
              당월 25일 지급),(21일~말일,익일 5일 지급) 4.출금 금액을 지정하여
              신청이 불가하며, 신청 정보와 금액 수정을 원 하실 경우,앞선 신청을
              취소하시고 다시 신청해주세요. 5.입금계좌의 예금주는 반드시 실명과
              동일해야 지급됩니다. 6.입금액은 관련 법상 사업소득에 따른
              세금3.3%를 공제하고 입금되며, 입금된 날짜를 기준으로 소득이 발생한
              것으로 신고됩니다. 7.명의도용 차단이 되어 있거나
              나이스평가정보에서 사용자 정보를 불러울 수 없는 경우,
              나이스평가정보의 고객상담 센터(1588-2486)또는 온라인 실명 등록
              서비스를 이용하세요.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PointManagement
