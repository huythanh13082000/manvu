import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import {Button, Grid, TextField} from '@mui/material'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp'
import './header.css'
import {useNavigate} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {selectUser, userActions} from './userSlice'
import {FILE_API} from '../../apis/urlConfig'
// import {selectCurrentUser} from '../../pages/login/authSlice'

export default function Header() {
  const [isSearch, setIsSearch] = React.useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)

  const handleLogin = () => {
    // navigate('/login')
    // console.log(user)
  }
  React.useEffect(() => {
    dispatch(userActions.getProfile())
  }, [dispatch])
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
              <Grid item xs={11}>
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
                      width: '30%',
                      fontFamily: 'Noto Sans KR',
                    }}
                  >
                    <li
                      className='h-li'
                      onClick={() => handleClickItemMenu('/home')}
                    >
                      지역 <KeyboardArrowDownSharpIcon />
                    </li>
                    <li
                      className='h-li'
                      onClick={() => handleClickItemMenu('/service')}
                    >
                      서비스 <KeyboardArrowDownSharpIcon />
                    </li>
                    <li
                      className='h-li'
                      onClick={() => handleClickItemMenu('/mycampaign')}
                    >
                      제품 <KeyboardArrowDownSharpIcon />
                    </li>
                    <li className='h-li'>|</li>
                    <li className='h-li'>REVIEWER</li>
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
                <img
                  style={{width: '48px', height: '48px', borderRadius: '8px'}}
                  src={`${FILE_API}${user.profile?.avatar}`}
                  alt='avatar'
                />
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
