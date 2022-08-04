import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import {Button, CardActionArea, Grid} from '@mui/material'
import './card.css'

export default function MultiActionAreaCard(props = {}) {
  return (
    <>
      <Grid style={{position: 'relative', width: '315px'}}>
        {/* <Loading /> */}
        {/* <CircularProgress
          style={{position: 'absolute', top: '45%', left: '41%'}}
        /> */}
        <Card
          sx={{maxWidth: 317, height: '466px'}}
          style={{marginTop: '2rem', paddingBottom: '1rem'}}
        >
          <CardActionArea style={{fontFamily: 'Noto Sans KR'}}>
            <CardMedia
              component='img'
              height='317'
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
            <CardContent>
              <Grid container style={{padding: '5px'}}>
                <Grid item xs={12} container style={{fontWeight: 'bold'}}>
                  <Grid item xs={5} className='c-p1'>
                    <Grid container>
                      <Grid marginRight='5px'>
                        <img src='/img/N.png' style={{width: '20px'}} alt='N' />
                      </Grid>
                      <Grid>Blog Naver</Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    style={{
                      border: '1px solid #E1E1E1',
                      height: '20px',
                      marginRight: '15px',
                    }}
                  ></Grid>
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
                <Grid container xs={12} style={{alignItems: 'center'}}>
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
