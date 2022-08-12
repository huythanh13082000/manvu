import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import {Button, CardActionArea, Grid} from '@mui/material'
import './card.css'
import {useNavigate} from 'react-router-dom'
import {Campaign} from '../../models/campaign'
import {FILE_API} from '../../apis/urlConfig'

interface Props {
  width?: string
  height?: string
  flag?: boolean
  heart?: boolean
  index?: number
  data?: Campaign
}

export default function CardBase(props: Props) {
  const heart = false
  const navigate = useNavigate()
  const handleClickCard = (params: string) => {
    navigate(params)
  }
  const listImgFlag = [
    '',
    '/img/blue.png',
    '/img/violet.png',
    '/img/green.png',
    '/img/orange.png',
  ]
  return (
    <>
      <Grid
        style={{
          position: 'relative',
          width: props.width || '315px',
          margin: '0 0.5rem',
        }}
      >
        {/* <Loading /> */}
        {/* <CircularProgress
          style={{position: 'absolute', top: '45%', left: '41%'}}
        /> */}
        <Card
          sx={{maxWidth: 317, height: props.height || '466px'}}
          style={{marginTop: '2rem', paddingBottom: '1rem'}}
          onClick={() => handleClickCard('/productdetail')}
        >
          <CardActionArea style={{fontFamily: 'Noto Sans KR'}}>
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
              <Grid container style={{padding: '5px'}}>
                <Grid item xs={12} container style={{fontWeight: 'bold'}}>
                  <Grid className='c-p1'>
                    <Grid container>
                      <Grid>
                        <img
                          src='/img/N.png'
                          style={{width: '20px', marginRight: '5px'}}
                          alt='N'
                        />
                      </Grid>
                      <Grid>{props.data?.media}</Grid>
                    </Grid>
                  </Grid>
                  <Grid style={{padding: '0 5px'}}>|</Grid>
                  <Grid item xs={6} className='c-p2'>
                    2일후에 시작합니다
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
          </CardActionArea>
        </Card>
      </Grid>
    </>
  )
}
