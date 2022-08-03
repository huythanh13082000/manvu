import {Grid, IconButton} from '@mui/material'
import React from 'react'
import './UploadFile.css'

const UploadFile = () => {
  return (
    <Grid>
      <Grid className='Ul-img'>
        <Grid className='Ul-iconButton'>
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='label'
          >
            <input hidden accept='image/*' type='file' />
            <Grid className='Ul-grid-icon' margin='auto'>
              {/* <PhotoCameraOutlinedIcon className='Ul-icon-upload' /> */}
              <img
                src='/img/Upload.png'
                alt='upload'
                style={{marginBottom: '4px'}}
              />
            </Grid>
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default UploadFile
