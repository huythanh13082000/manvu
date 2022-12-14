import * as React from 'react'
import Button from '@mui/material/Button'
import {styled} from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import './Dialog.css'
import CustomAutocomplete from '../../../components/Autocomplete'
import {Grid, TextareaAutosize, TextField} from '@mui/material'

import UploadImg from '../../../components/UploadImg'

const BootstrapDialog = styled(Dialog)(({theme}) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const {children, onClose, ...other} = props

  return (
    <DialogTitle sx={{m: 0, p: 2}} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon
            style={{
              border: '2px solid #4D4D4D',
              padding: '2px',
              borderRadius: '50%',
            }}
          />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

export default function DialogRequest(Props: {
  open: boolean
  setOpenDialog: Function
}) {
  const [open, setOpen] = React.useState(Props.open)
  React.useEffect(() => {
    setOpen(Props.open)
  }, [Props.open])

  const handleClose = () => {
    Props.setOpenDialog()
  }
  console.log(666, Props.open)
  return (
    <div>
      {/* <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        >
          <p className='dialog-title'> ?????? ??????</p>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid width='width: 422px'>
            <p className='r-p2'>????????????</p>
            <CustomAutocomplete />
          </Grid>
          <Grid item xs={12}>
            <p className='r-p2'>?????? ?????????</p>
            <TextField
              className='r-input'
              id='outlined-basic'
              variant='outlined'
              size='small'
              placeholder='????????? ????????? ??????????????????.'
              inputProps={{
                style: {
                  height: '29px',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <p className='r-p2'>??????</p>
            <TextField
              className='r-input'
              id='outlined-basic'
              variant='outlined'
              size='small'
              placeholder='????????? ??????????????????.'
              inputProps={{
                style: {
                  height: '29px',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              className='dialog-TextareaAutosize'
              aria-label='minimum height'
              minRows={3}
              placeholder='????????? ??????????????????.'
            />
          </Grid>

          <Grid item xs={12}>
            <p className='r-p2'>??????????????? & ????????? ??????</p>
            <Grid>
              <UploadImg />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            className='dialog-button'
            variant='contained'
            onClick={handleClose}
          >
            ????????????
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}
