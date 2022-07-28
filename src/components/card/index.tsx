import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
// import Typography from '@mui/material/Typography'
// import FavoriteIcon from '@mui/icons-material/Favorite'
import {CardActionArea, CircularProgress, Grid} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './card.css'
export default function MultiActionAreaCard(props = {}) {
  return (
    <>
      <Grid style={{position: 'relative', width: '425px'}}>
        {/* <Loading /> */}
        <CircularProgress
          style={{position: 'absolute', top: '45%', left: '36%'}}
        />
        <Grid>
          <Grid
            style={{
              position: 'absolute',
              top: '7px',
              left: '-10px',
              backgroundColor: '#45B500',
              color: 'white',
              width: '70px',
              textAlign: 'center',
              zIndex: 100,
            }}
          >
            3일남음
          </Grid>
          <Grid
            style={{
              position: 'absolute',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderBottom: '10px solid transparent',
              borderRight: '10px solid green',
              top: '31px',
              left: '-20px',
              zIndex: 100,
            }}
          ></Grid>
        </Grid>
        <Card sx={{maxWidth: 345}} style={{marginTop: '2rem'}}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image='https://mui.com/static/images/cards/contemplative-reptile.jpg'
              alt='green iguana'
              style={{position: 'relative'}}
            />
            <FavoriteBorderIcon
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                color: 'white',
              }}
            />
            <CardContent>
              <Grid
                container
                style={{padding: '5px', fontFamily: 'Noto Sans KR'}}
              >
                <Grid item xs={6} container style={{fontWeight: 'bold'}}>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: '#5B8811',
                    }}
                  >
                    블로그
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    style={{borderLeft: '1px solid black'}}
                  ></Grid>
                  <Grid
                    item
                    xs={6}
                    style={{
                      color: '#CF3BF4',
                    }}
                  >
                    배송형
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <div className='block-ellipsis'>
                    [루치펠로] 맛집치약&가글 6종 세트 입니다 입니다...
                  </div>
                </Grid>
                <Grid
                  container
                  xs={12}
                  style={{fontSize: '11px', marginBottom: '0.5rem'}}
                >
                  <span>치약&가글 6종 세트입니다.</span>
                </Grid>
                <Grid container xs={12}>
                  <Grid
                    item
                    xs={6}
                    container
                    style={{
                      background: 'rgba(0, 101, 242, 0.16)',
                      justifyContent: 'space-between',
                      padding: '5px 15px',
                      borderRadius: '22px',
                    }}
                  >
                    <FavoriteIcon style={{color: '#0078FF'}} />
                    <div style={{color: '#0078FF'}}>신청 225 / 4 명</div>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{
                      textAlign: 'right',
                      fontWeight: '700',
                      alignItems: 'center',
                      margin: 'auto',
                      fontSize: '18px',
                    }}
                  >
                    50,000P
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
