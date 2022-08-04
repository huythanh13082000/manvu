import {Box, Grid, IconButton} from '@mui/material'
import React, {useState} from 'react'
import './UploadFile.css'

function UploadFile() {
  const [file, setFile] = useState('')
  // const [text, setText] = useState('')

  function handleChange(e: any) {
    let url = URL.createObjectURL(e.target.files[0])
    setFile(url)
    console.log(url)
  }
  return (
    <Box component='main' width='auto' height='auto'>
      <Box>
        <Grid>
          <Grid className='Ul-img' style={{backgroundImage: `url(${file})`}}>
            {file.length > 0 && (
              <>
                {/* <CardActionArea> */}
                {/* <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='140'
                  image={file}
                  title='Contemplative Reptile'
                  style={{borderRadius: '50%'}}
                /> */}
                {/* </CardActionArea> */}
              </>
            )}
            <Grid
              className='Ul-iconButton'
              style={{
                backgroundImage: `url(${
                  file && '/public/img/Ellipse 434.png'
                })`,
              }}
            >
              <IconButton
                color='primary'
                aria-label='upload picture'
                component='label'
              >
                <input
                  hidden
                  accept='image/*'
                  type='file'
                  name='upload-photo'
                  onChange={handleChange}
                />
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
        <div>
          {/* <TextField
            id='outlined-full-width'
            label='Text'
            style={{margin: 8}}
            placeholder='Enter Text For Image'
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
            variant='outlined'
            onChange={(event: any) => setText(event.target.value)}
          /> */}

          {/* <TextField
            id='outlined-full-width'
            label='Image Upload'
            style={{margin: 8}}
            name='upload-photo'
            type='file'
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
            variant='outlined'
            onChange={handleChange}
          /> */}
        </div>
      </Box>
    </Box>
  )
}

export default UploadFile
