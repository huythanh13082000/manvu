import {Button, Grid, Tab, Tabs} from '@mui/material'
import React from 'react'
import LayOut from '../layout'
import './CampaignDetail.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CardReview from '../../components/CardReview'
import CardChannel from '../../components/CardChannel'
import {useParams} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {campaignDetailAction, selectcampaignDetail} from './CampaignDetailSlice'
import {FILE_API} from '../../apis/urlConfig'
import SlickSlider from '../../components/slider'
import moment from 'moment'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'
import {Campaign} from '../../models/campaign'

const ProductDetail = () => {
  const [value, setValue] = React.useState(0)
  let {id} = useParams()
  const dispatch = useAppDispatch()
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const campaignDetail = useAppSelector(selectcampaignDetail)
  const styleTab = {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '15px',
    lineHeight: '22px',
    color: '#4D4D4D',
  }

  React.useEffect(() => {
    dispatch(campaignDetailAction.getCampaignDetail(Number(id)))
  }, [])

  const getDate = (params: string): string => {
    return `${moment(params).format('MM')}월${moment(params).format('DD')}일`
  }

  console.log('campaignDetail', campaignDetail)
  return (
    <LayOut>
      <Grid container justifyContent='center' marginTop='4rem'>
        <Grid container width='1230px'>
          <Grid item xs={8} borderRight='1px solid #E1E1E1'>
            <p className='pd-title'>{campaignDetail?.name}</p>
            <p className='pd-p1'>{campaignDetail?.shortDescription}</p>
            <Grid container item xs={12}>
              <Grid
                className='r-grid-youtube'
                textAlign='center'
                style={{marginRight: '7px', width: '30px', height: '30px'}}
                borderRadius='50%'
              >
                <img
                  src='/img/youtube.png'
                  alt='facebook'
                  style={{marginTop: '9px', width: '15px'}}
                />
              </Grid>
              <Grid>
                <p className='pd-p2'>동영상으로 리뷰</p>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Tabs
                onChange={handleChange}
                value={value}
                aria-label='Tabs where each tab needs to be selected manually'
                style={{borderBottom: '1px solid #C4C4C4'}}
              >
                <Tab label='캠페인정보' sx={{...styleTab}} />
                <Tab label='신청500/12' sx={{...styleTab}} />
                <Tab label='Review' sx={{...styleTab}} />
              </Tabs>
              {value === 0 ? (
                <>
                  <Grid paddingTop='2rem' item xs={12}>
                    <img
                      src={`${FILE_API}${campaignDetail?.images[0]}`}
                      alt='img'
                      style={{width: '785px', height: '785px'}}
                    />
                  </Grid>
                  <Grid item xs={12} borderBottom=' 1px solid #E1E1E1'>
                    <p className='pd-p-load-more'>
                      이미지 더 보기 <KeyboardArrowDownIcon />
                    </p>
                  </Grid>
                  <Grid item xs={12} container>
                    <Grid item xs={2}>
                      <p className='pd-p8'>제공 내역</p>
                    </Grid>
                    <Grid item xs={10}>
                      <pre className='pd-p9'>{campaignDetail?.offers}</pre>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} container>
                    <Grid item xs={2}>
                      <p className='pd-p8'>방문 및 예약안내</p>
                    </Grid>
                    <Grid item xs={10}>
                      <pre className='pd-p9'>{campaignDetail?.content}</pre>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} container>
                    <Grid item xs={2}>
                      <p className='pd-p8'>검색키워드</p>
                    </Grid>
                    <Grid item xs={8}>
                      <pre className='pd-p9'>{campaignDetail?.keywords}</pre>
                    </Grid>
                    <Grid item xs={2} container color='#0094FF'>
                      <p
                        style={{
                          border: '1px solid #0094FF',
                          height: '33px',
                          padding: '0.2rem',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `${campaignDetail?.keywords}`
                          )
                        }}
                      >
                        키워드 복사 <FileCopyOutlinedIcon />
                      </p>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} container>
                    <Grid item xs={2}>
                      <p className='pd-p8'>캠페인미션</p>
                    </Grid>
                    <Grid item xs={10}>
                      <pre className='pd-p9'>{campaignDetail?.mission}</pre>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} container>
                    <Grid item xs={2}>
                      <p className='pd-p8'>추가 안내사항</p>
                    </Grid>
                    <Grid item xs={10}>
                      <pre className='pd-p9'>{campaignDetail?.notes}</pre>
                    </Grid>
                  </Grid>
                </>
              ) : null}
              {value === 2 ? (
                <>
                  <p>Tất cả bài review</p>
                  <CardReview />
                </>
              ) : null}
              {value === 1 ? <CardChannel /> : null}
            </Grid>
          </Grid>
          <Grid item xs={4} padding='2rem'>
            <Grid
              container
              item
              xs={12}
              padding='0.8rem'
              border='1px solid #E1E1E1'
              borderRadius='5px'
            >
              <Grid marginRight='1rem'>
                <img src='/img/KFC.png' alt='logo' />
              </Grid>
              <Grid>
                <p className='pd-p3'>그린앱 베트남</p>
                <p className='pd-p4'>캠페인 진행중</p>
              </Grid>
            </Grid>

            <Grid item xs={12} container justifyContent='space-between'>
              <p className='pd-p5'>캠페인 신청기간</p>
              <p className='pd-p6'>
                {getDate(campaignDetail?.campaignRegistrationDateFrom || '') +
                  '~' +
                  getDate(campaignDetail?.campaignRegistrationDateTo || '')}
              </p>
            </Grid>
            <Grid item xs={12} container justifyContent='space-between'>
              <p className='pd-p5'>인플루언서 발표</p>
              <p className='pd-p6'>
                {getDate(campaignDetail?.announcementToMemberDate || '')}
              </p>
            </Grid>
            <Grid
              item
              xs={12}
              container
              justifyContent='space-between'
              color='#0078FF'
            >
              <p className='pd-p5'>콘텐츠 등록기간</p>
              <p className='pd-p6'>
                {getDate(campaignDetail?.contentRegistrationDateFrom || '') +
                  '~' +
                  getDate(campaignDetail?.contentRegistrationDateTo || '')}
              </p>
            </Grid>
            <Grid item xs={12} container justifyContent='space-between'>
              <p className='pd-p5'>캠페인 결과발표</p>
              <p className='pd-p6'>
                {getDate(campaignDetail?.announcementFinalDate || '')}
              </p>
            </Grid>
            <Grid borderBottom='1px solid #E1E1E1'></Grid>
            <Grid item xs={12} padding='0.3rem 0'>
              <p className='pd-p5'>캠페인의 상품</p>
            </Grid>
            <Grid borderBottom='1px solid #E1E1E1'></Grid>
            <Grid item xs={12}>
              <p className='pd-p5'>키워드</p>
            </Grid>
            <Grid borderBottom='1px solid #E1E1E1'></Grid>
            <Grid item xs={12}>
              <p className='pd-p5'>정보</p>
            </Grid>
            <Grid borderBottom='1px solid #E1E1E1'></Grid>
            <Grid item xs={12}>
              <p className='pd-p5'>업무</p>
            </Grid>
            <Grid borderBottom='1px solid #E1E1E1'></Grid>
            <Grid>
              <p>캠페인에 선정 되셨습니다.</p>
            </Grid>
            <Grid item xs={12} marginTop='2rem'>
              <Button
                variant='contained'
                style={{width: '100%'}}
                className='pd-button'
              >
                캠페인 신청하기
              </Button>
            </Grid>
          </Grid>
          <p className='pd-p7'>캠페인 관련</p>
        </Grid>

        {campaignDetail ? (
          <Grid container justifyContent='center'>
            <Grid width='1420px' container justifyContent='center'>
              <SlickSlider
                listCampaign={[
                  campaignDetail,
                  campaignDetail,
                  campaignDetail,
                  campaignDetail,
                  campaignDetail,
                ]}
              />
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </LayOut>
  )
}

export default ProductDetail
