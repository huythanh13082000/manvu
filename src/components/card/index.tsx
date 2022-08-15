import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import {Button, Grid} from '@mui/material'
import './card.css'
import {useNavigate} from 'react-router-dom'
import {Campaign} from '../../models/campaign'
import {FILE_API} from '../../apis/urlConfig'
import moment from 'moment'
interface Props {
  width?: string
  height?: string
  flag?: boolean
  heart?: boolean
  index?: number
  data?: Campaign
  disableMargin?: boolean
}

export default function CardBase(props: Props) {
  const heart = false
  const navigate = useNavigate()
  const handleClickCard = (params: string) => {
    navigate(params)
  }
  React.useEffect(() => {
    console.log(
      8888,
      moment(
        Date.parse(props.data?.announcementFinalDate || moment().format()) -
          Date.parse(moment().format())
      ).format('DD')
    )
  })

  const listImgFlag = [
    '',
    '/img/blue.png',
    '/img/violet.png',
    '/img/green.png',
    '/img/orange.png',
  ]
  const mediaImg: any = {
    blog_naver: '/img/N.png',
    tiktok: '/img/tiktok-img.png',
    youtube: '/img/youtube-img.png',
    instagram: '/img/Instagram-img.png',
  }
  return (
    <Grid
      margin={props.disableMargin ? '0' : '0 auto'}
      width={props.width || '317px'}
    >
      <Grid
        style={{
          position: 'relative',
          margin: '0 0.5rem',
        }}
      >
        {/* <Loading /> */}
        {/* <CircularProgress
          style={{position: 'absolute', top: '45%', left: '41%'}}
        /> */}
        <Card
          sx={{maxWidth: 315, height: props.height || '455px'}}
          style={{marginTop: '2rem', paddingBottom: '1rem'}}
          onClick={() => handleClickCard(`/productdetail/${props.data?.id}`)}
        >
          <CardMedia
            component='img'
            height={props.width ? '180px' : '300px'}
            width={props.width}
            image={
              props.data?.images?.length === 0
                ? '/img/Sell-Your-Product.png'
                : `${FILE_API}${props.data?.images}`
            }
            alt='green iguana'
          />
          <Grid
            className='c-grid-heart'
            container
            justifyContent='center'
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: heart ? 'white' : 'rgba(17, 17, 17, 0.3)',
            }}
          >
            <img
              src={!heart ? '/img/heart.png' : '/img/heart1.png'}
              style={{width: '16.67px', height: '14.83px', marginTop: '13px'}}
              alt='heart'
            />
          </Grid>
          {props.flag ? (
            <Grid
              style={{
                position: 'absolute',
                top: '0rem',
                left: '1rem',
              }}
            >
              <Grid position='relative'>
                <img src={listImgFlag[props.index || 0]} alt='flag' />
                <span className='c-span1'>{props.index}</span>
              </Grid>
            </Grid>
          ) : null}

          <CardContent>
            <Grid container>
              <Grid item xs={12} container style={{fontWeight: 'bold'}}>
                <Grid className='c-p1'>
                  <Grid container>
                    <Grid>
                      <img
                        src={mediaImg[`${props.data?.media}`]}
                        style={{width: '20px', marginRight: '5px'}}
                        alt='N'
                      />
                    </Grid>
                    <Grid>{props.data?.media}</Grid>
                  </Grid>
                </Grid>
                <Grid
                  style={{margin: '0 5px'}}
                  height='1rem'
                  borderLeft='1px solid #E1E1E1'
                ></Grid>
                <Grid item xs={6} className='c-p2'>
                  {moment(
                    Date.parse(
                      props.data?.announcementFinalDate || moment().format()
                    ) - Date.parse(moment().format())
                  ).format('DD')}
                  일남음
                </Grid>
              </Grid>
              <Grid item xs={12} width='24px'>
                <div className='block-ellipsis'>
                  {props.data?.shortDescription}
                </div>
              </Grid>
              <Grid item xs={12}>
                <span>{props.data?.adddress}</span>
              </Grid>
              <Grid
                container
                item
                xs={12}
                style={{alignItems: 'center'}}
                marginTop='0.5rem'
              >
                <Grid className='c-p5 ' marginRight='10px'>
                  신청100/12
                </Grid>
                <Grid>
                  <Button variant='outlined' className='c-button'>
                    {props.data?.point}P
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
