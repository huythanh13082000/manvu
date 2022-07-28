import React from 'react'
import {Grid} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import Button from '@mui/material/Button'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
export function Footer(props = {}) {
  return (
    <Grid
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      <Grid
        style={{
          padding: '20px 42px',
          border: '2px solid rgba(39, 39, 39, 0.12)',
        }}
      >
        <p style={{color: '#0078FF', fontWeight: '700', fontSize: '30px'}}>
          망고리뷰
        </p>
        <Grid container>
          <Grid item xs={6}>
            <p>연락해주세요</p>
            <Grid item xs={12} container>
              <p style={{marginRight: '0.5rem'}}>망고리뷰 코퍼레이션</p>
              <p
                style={{
                  padding: '0 0.5rem',
                  borderLeft: '1px solid black',
                  borderRight: '1px solid black',
                }}
              >
                대표이사: 장대규,정연
              </p>
              <p style={{marginLeft: '0.5rem'}}>
                개인정보보호 최고책임자: 기통하
              </p>
            </Grid>
            <Grid item xs={12} container>
              <p
                style={{paddingRight: '0.5rem', borderRight: '1px solid black'}}
              >
                사업자등록번호: 0123456789
              </p>
              <p style={{paddingLeft: '0.5rem'}}>
                통신판매업신고번호: 제2016-서울강남-01523호
              </p>
            </Grid>
            <Grid item xs={12} container>
              <LocationOnIcon
                style={{margin: 'auto 1rem', marginLeft: '0rem'}}
              />
              <p>서울특별시 강남구 노현로 135길 29 (논현동)</p>
            </Grid>
            <Grid item xs={12} container>
              <PhoneInTalkIcon
                style={{margin: 'auto 1rem', marginLeft: '0rem'}}
              />
              <p>010-1234-3453</p>
            </Grid>
            <Grid item xs={12} container>
              <MailOutlineIcon
                style={{margin: 'auto 1rem', marginLeft: '0rem'}}
              />
              <p>메일: greenapp@naver.com</p>
            </Grid>
          </Grid>

          <Grid item xs={6} container>
            <Grid item xs={6}>
              <p>서비스 정책</p>
              <p>이용약관</p>
              <p>운영정책</p>
              <p>개인정보처리방침</p>
              <p>위치기반서비스이용약관</p>
            </Grid>
            <Grid item xs={6}>
              <p>팔로우</p>
              <Grid container style={{marginBottom: '3rem'}}>
                <img
                  src='/img/talk.png'
                  style={{width: '38px', borderRadius: '50%'}}
                  alt='talk.img'
                />
                <FacebookOutlinedIcon
                  style={{
                    fontSize: '40px',
                    color: '#3B5998',
                    padding: '0 1rem',
                  }}
                />
                <img
                  src='/img/Instagram.png'
                  alt='instagram'
                  style={{width: '38px', borderRadius: '50%'}}
                />
              </Grid>
              <p>다운로드</p>
              <Grid container>
                <img
                  src='/img/CH_play.png'
                  alt='chplay'
                  style={{marginRight: '0.5rem'}}
                />
                <img src='/img/appstore.png' alt='appstore' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 42px',
        }}
      >
        <p>© 망고리뷰 Corporation. All Rights Reserved.</p>
        <Button
          variant='contained'
          style={{backgroundColor: 'rgba(39, 39, 39, 0.12)', height: '40px'}}
        >
          광고문의 <NavigateNextIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

export default Footer
