import {Add} from '@mui/icons-material'
import {Button, Grid, Menu, MenuItem} from '@mui/material'
import React, {useState} from 'react'
import CardRequest from '../../components/CardRequest'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import './Request.css'
import DialogRequest from './Dialog'
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'

const Request = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [openDialog, setOpenDialog] = useState(false)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const setStateOpenDialog = () => {
    setOpenDialog(false)
  }

  return (
    <Grid container>
      <Grid item xs={5} container borderRight='1px solid #E1E1E1'>
        <Grid
          item
          xs={11}
          container
          alignItems='center'
          justifyContent='space-between'
          padding='0 0.4rem'
        >
          <p className='rq-title'>1:1문의</p>
          <Button className='rq-button' variant='outlined'>
            <Add style={{fontSize: '16px'}} /> 문의작성
          </Button>
        </Grid>

        <Grid>
          <CardRequest />
          <Grid
            item
            xs={11}
            borderTop='1px solid #E1E1E1'
            marginLeft='0.5rem'
          ></Grid>
        </Grid>

        <Grid>
          <CardRequest />
          <Grid
            item
            xs={11}
            borderTop='1px solid #E1E1E1'
            marginLeft='0.8rem'
          ></Grid>
        </Grid>
        <Grid>
          <CardRequest />
          <Grid
            item
            xs={11}
            borderTop='1px solid #E1E1E1'
            marginLeft='0.8rem'
          ></Grid>
        </Grid>
        <Grid>
          <CardRequest />
          <Grid
            item
            xs={11}
            borderTop='1px solid #E1E1E1'
            marginLeft='0.8rem'
          ></Grid>
        </Grid>
        <Grid>
          <CardRequest />
          <Grid
            item
            xs={11}
            borderTop='1px solid #E1E1E1'
            marginLeft='0.8rem'
          ></Grid>
        </Grid>
        <Grid>
          <CardRequest />
          <Grid
            item
            xs={11}
            borderTop='1px solid #E1E1E1'
            marginLeft='0.8rem'
          ></Grid>
        </Grid>
      </Grid>
      <Grid item xs={7} padding='2rem 3rem'>
        <Grid
          bgcolor='#F6F6F6'
          container
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid container alignItems='center' item xs={8}>
            <img
              src='/img/avatarRequest.png'
              alt='avatar'
              style={{width: '80px', height: '80px'}}
            />
            <Grid>
              <p className='rq-p1'>우리집</p>
              <p className='rq-p2'>2021-06-05</p>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Button
              id='demo-positioned-button'
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreVertOutlinedIcon style={{color: '#677294', width: '20px'}} />
            </Button>

            <Menu
              id='demo-positioned-menu'
              aria-labelledby='demo-positioned-button'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose()
                  setOpenDialog(true)
                }}
                style={{borderBottom: '1px solid #D5D5DE'}}
              >
                <p className='rq-p4'>
                  수정 <ModeEditOutlineOutlinedIcon />
                </p>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <p className='rq-p5'>
                  지우기 <DeleteSweepOutlinedIcon />
                </p>
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
        <p className='rq-p3'>
          아까 입금했는데 이기명이름으로 30만원했어요 확인해주 세요.
        </p>
        <DialogRequest open={openDialog} setOpenDialog={setStateOpenDialog} />
      </Grid>
    </Grid>
  )
}

export default Request
