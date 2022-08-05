import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import {Button, CardActionArea, Grid} from '@mui/material'
import './card.css'

interface Props {
  width?: string
  height?: string
  flag?: boolean
}

export default function CardBase(props: Props = {}) {
  return (
    <>
      <Grid
        style={{
          position: 'relative',
          width: props.width || '315px',
          margin: '0 1rem',
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
              height={props.width}
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
                right: '1rem',
                color: 'white',
              }}
            >
              <img
                src='/img/heart.png'
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
                  <img src='/img/flag.png' alt='flag' />
                  <span className='c-span1'>1</span>
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
                <Grid
                  container
                  xs={12}
                  style={{alignItems: 'center'}}
                  marginBottom='1rem'
                >
                  <Grid className='c-p5 ' marginRight='10px'>
                    신청100/12
                  </Grid>
                  <Grid>
                    <Button variant='outlined' className='c-button'>
                      500P
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
