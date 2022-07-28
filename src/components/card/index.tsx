import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import {Button, CardActionArea, CardActions, Grid} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export default function MultiActionAreaCard() {
  return (
    <Card sx={{maxWidth: 345}}>
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
          <Typography
            style={{color: 'green'}}
            gutterBottom
            variant='h6'
            component='div'
          >
            Lizard
          </Typography>
          <Typography gutterBottom variant='h6' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            text abc
          </Typography>
          <Grid container style={{margin: '10px 0'}}>
            <Grid
              item
              xs={6}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#1695e773',
                color: 'blue',
                borderRadius: '18px',
                height: '40px',
                textAlign: 'center',
              }}
            >
              <FavoriteIcon />
              abc 1/8
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                height: '40px',
              }}
            >
              <h2>100,000P</h2>
            </Grid>
          </Grid>
          <Typography variant='body2' color='text.secondary'>
            abcabc
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  )
}
