import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import {Button, Grid, Menu, MenuItem, TextField} from '@mui/material'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp'
import './header.css'
import {useNavigate} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {selectUser, userActions} from './userSlice'
import {FILE_API} from '../../apis/urlConfig'
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined'
import {setTokenAxios} from '../../apis/axiosClient'
// import {selectCurrentUser} from '../../pages/login/authSlice'

export default function Header() {
  const [isSearch, setIsSearch] = React.useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [openDialog, setOpenDialog] = React.useState(false)
  React.useEffect(() => {
    setTokenAxios()
  }, [])
  React.useEffect(() => {
    dispatch(userActions.getProfile())
  }, [])
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseDialog = () => {
    setAnchorEl(null)
  }
  const setStateOpenDialog = () => {
    setOpenDialog(false)
  }
  const handleLogin = () => {
    navigate('/login')
  }
  const handleRegister = () => {
    navigate('/termsofuse')
  }
  const handleSearch = () => {
    setIsSearch(true)
  }
  const handleClose = () => {
    setIsSearch(false)
  }
  const handleClickItemMenu = (params: string) => {
    navigate(params)
  }
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  console.log(22222, user)
  return (
    <Grid
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        zIndex: '99',
      }}
    >
      <Box sx={{flexGrow: 1}}>
        <AppBar position='static' style={{backgroundColor: 'white'}}>
          {isSearch ? (
            <Grid
              className='h-grid-search'
              container
              justifyContent='space-between'
              alignItems='center'
              padding='0.3rem 4rem'
            >
              <Grid>
                <img
                  src='/img/search1.png'
                  alt='search'
                  style={{width: '45px', margin: '0 1rem'}}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  style={{
                    width: '100%',
                  }}
                  variant='standard'
                  InputProps={{
                    disableUnderline: true,
                  }}
                  placeholder='Typing ...'
                />
              </Grid>
              <Grid>
                <Button onClick={handleClose}>
                  <img
                    src='/img/close.png'
                    alt='close'
                    style={{width: '45px'}}
                  />
                </Button>
              </Grid>
            </Grid>
          ) : null}
          {!isSearch ? (
            <Toolbar>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='open drawer'
                sx={{mr: 2}}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant='h6'
                noWrap
                component='div'
                sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
              >
                <Grid container alignItems='center'>
                  <Grid item xs={1} container alignItems='center'>
                    <img
                      style={{width: '48px'}}
                      src='/img/logo.png'
                      alt='logo'
                    />
                  </Grid>

                  <ul
                    style={{
                      alignItems: 'center',
                      display: 'flex',
                      color: 'black',
                      listStyle: 'none',
                      justifyContent: 'space-around',
                      width: '50%',
                      fontFamily: 'Noto Sans KR',
                    }}
                  >
                    <li
                      className='h-li'
                      onClick={() => handleClickItemMenu('/home')}
                    >
                      전체
                      {/* <KeyboardArrowDownSharpIcon /> */}
                    </li>
                    <li
                      className='h-li'
                      onClick={() => handleClickItemMenu('/service')}
                    >
                      지역
                      <KeyboardArrowDownSharpIcon />
                    </li>
                    <li
                      className='h-li'
                      onClick={() => handleClickItemMenu('/mycampaign')}
                    >
                      제품
                      <KeyboardArrowDownSharpIcon />
                    </li>
                    <li
                      className='h-li'
                      onClick={() => handleClickItemMenu('/mycampaign')}
                    >
                      서비스
                      <KeyboardArrowDownSharpIcon />
                    </li>
                    <li
                      className='h-li'
                      onClick={() => handleClickItemMenu('/mycampaign')}
                    >
                      기자단
                      <KeyboardArrowDownSharpIcon />
                    </li>
                  </ul>
                </Grid>
              </Typography>
              {!user.profile ? (
                <>
                  <Button
                    className='h-button-login'
                    variant='outlined'
                    onClick={handleLogin}
                  >
                    로그인
                  </Button>
                  <Button
                    className='h-button-register'
                    variant='contained'
                    onClick={handleRegister}
                  >
                    회원가입
                  </Button>
                </>
              ) : null}

              {user.profile ? (
                <>
                  <Grid item xs={2}>
                    {/* <Button
                      id='demo-positioned-button'
                      aria-controls={open ? 'demo-positioned-menu' : undefined}
                      aria-haspopup='true'
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      asdsda
                    </Button> */}

                    <Menu
                      id='demo-positioned-menu'
                      aria-labelledby='demo-positioned-button'
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleCloseDialog}
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
                          handleCloseDialog()
                          setOpenDialog(true)
                          navigate('/myCampaign')
                        }}
                        style={{borderBottom: '1px solid #D5D5DE'}}
                      >
                        <p className='h-p1'>{user.profile.username}</p>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleCloseDialog()
                          handleLogout()
                        }}
                      >
                        <p className='h-p2'>로그아웃</p>
                      </MenuItem>
                    </Menu>
                  </Grid>
                  <img
                    style={{width: '48px', height: '48px', borderRadius: '8px'}}
                    src={`${FILE_API}${user.profile?.avatar}`}
                    alt='avatar'
                    onClick={handleClick}
                  />
                  <Grid
                    border='1px solid #E1E1E1'
                    marginLeft='1rem'
                    padding='0.45rem 0.55rem'
                    borderRadius='8px'
                    position='relative'
                  >
                    <NotificationImportantOutlinedIcon
                      style={{color: '#292929'}}
                    />
                    <p
                      style={{
                        width: '16px',
                        backgroundColor: '#DE1F1F',
                        textAlign: 'center',
                        borderRadius: '50%',
                        // padding: '0 1px',
                        fontSize: '10px',
                        position: 'absolute',
                        top: '-6px',
                        right: '6px',
                      }}
                    >
                      5
                    </p>
                  </Grid>
                  {/* <IconButton aria-label='delete' size='large'> */}

                  {/* </IconButton> */}
                </>
              ) : null}
              <Button>
                <img
                  src='/img/search.png'
                  alt='search'
                  onClick={handleSearch}
                />
              </Button>
            </Toolbar>
          ) : null}
        </AppBar>
      </Box>
    </Grid>
  )
}
