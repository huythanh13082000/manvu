import {Grid} from '@mui/material'
import React from 'react'
import YouTube, {YouTubeProps} from 'react-youtube'
import './CardReview.css'

const CardReview = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
    console.log(66666, event.target.videoTitle)
  }

  const opts: YouTubeProps['opts'] = {
    height: '309',
    width: '424',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  return (
    <div>
      <Grid container>
        <Grid item xs={1}>
          <img
            src='/img/avarta.png'
            alt='avatar'
            style={{width: '45px', height: '45px'}}
          />
        </Grid>
        <Grid item xs={10}>
          <p className='cr-p1'>
            Tandungnguyen <span className='cr-sp1'>16:15 07/28/2022</span>
          </p>
          <p className='cr-p2'>
            대통령이 궐위되거나 사고로 인하여 직무를 수행할 수 없을 때에는
            국무총리, 법률이 정한 국무위원의 순서로 그 권한을 대행한다.
          </p>
          <YouTube videoId='v8Fmqwl9D-s' opts={opts} onReady={onPlayerReady} />
        </Grid>
      </Grid>
    </div>
  )
}

export default CardReview
