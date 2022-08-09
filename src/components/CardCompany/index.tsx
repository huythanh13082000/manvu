import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import {CardActionArea, Grid} from '@mui/material'
import './CardCompany.css'

interface Props {
  width?: string
  height?: string
  flag?: boolean
  index?: number
}

export default function CardCompany(props: Props) {
  const index = 2
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
        >
          <CardActionArea style={{fontFamily: 'Noto Sans KR'}}>
            <CardMedia
              component='img'
              height={props.width ? '180px' : ''}
              width={props.width}
              image='/img/img3.png'
              alt='green iguana'
            />
            <Grid
              className='c-grid-heart'
              container
              justifyContent='center'
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: '#FF0000',
                color: 'white',
              }}
              alignItems='center'
            >
              {index}
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
                  <img src='/img/flag.png' alt='flag' />
                  <span className='c-span1'>{index}</span>
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
                      <Grid>Blog Naver</Grid>
                    </Grid>
                  </Grid>
                  <Grid style={{padding: '0 5px'}}>|</Grid>
                  <Grid item xs={6} className='c-p2'>
                    2일후에 시작합니다
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <div className='block-ellipsis'>
                    이것은 제목이며 1줄 텍스트로 표시됩.
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <span>주소</span>
                </Grid>
                <Grid item xs={12} color='red'>
                  <p className='c-p6'>[ 완료 ]</p>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  )
}
