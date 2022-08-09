import {Close} from '@mui/icons-material'
import {Box, Grid, IconButton} from '@mui/material'
import React, {useState} from 'react'
import './UploadImg.css'

function UploadFile() {
  const [file, setFile] = useState<string[]>([])
  // const [text, setText] = useState('')

  function handleChange(e: any) {
    let url = URL.createObjectURL(e.target.files[0])
    let ArrayImg: string[]
    ArrayImg = [...file]
    ArrayImg.push(url)
    setFile(ArrayImg)
  }
  const deletImg = (index: number) => {
    let ArrayImg: string[]
    ArrayImg = [...file]
    ArrayImg.splice(index, 1)
    setFile(ArrayImg)
  }
  console.log(file)
  return (
    <Box component='main' width='auto' height='auto'>
      <Box>
        <Grid container item xs={12}>
          <Grid className='ULI-img' borderRadius='8px' marginRight='0.8rem'>
            <Grid item xs={12} className='ULI-iconButton'>
              <IconButton
                color='primary'
                aria-label='upload picture'
                component='label'
                style={{position: 'relative'}}
              >
                <input
                  hidden
                  accept='image/*'
                  type='file'
                  name='upload-photo'
                  onChange={handleChange}
                />
                <Grid className='ULI-grid-icon' margin='auto'>
                  {/* <PhotoCameraOutlinedIcon className='Ul-icon-upload' /> */}
                  <img
                    src='/img/addImg.png'
                    alt='upload'
                    style={{width: '50px'}}
                    // style={{marginBottom: '4px'}}
                  />
                </Grid>
              </IconButton>
            </Grid>
          </Grid>
          {file.length > 0 && (
            <>
              {file.map((item, index: number = 0) => {
                return (
                  <Grid position='relative'>
                    <img
                      src={item}
                      alt={item}
                      style={{
                        width: '110px',
                        height: '110px',
                        borderRadius: '8px',
                        marginRight: '0.8rem',
                      }}
                    />
                    <IconButton
                      aria-label='close'
                      size='small'
                      style={{
                        position: 'absolute',
                        top: '-10%',
                        right: '3%',
                        color: '#6D829A',
                        background: '#D5D5DE',
                        width: '30px',
                        height: '30px',
                      }}
                      onClick={() => deletImg(index)}
                    >
                      <Close />
                    </IconButton>
                  </Grid>
                )
              })}

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
        </Grid>
      </Box>
    </Box>
  )
}

export default UploadFile
