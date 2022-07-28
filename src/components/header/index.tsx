import * as React from 'react'
import {styled, alpha} from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import {Button, Grid} from '@mui/material'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp'

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function Header() {
  return (
    <Grid
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        zIndex: '9999',
      }}
    >
      <Box sx={{flexGrow: 1}}>
        <AppBar position='static' style={{backgroundColor: 'white'}}>
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
              <Grid style={{display: 'flex', alignItems: 'center'}}>
                <span
                  style={{
                    color: '#0078FF',
                    fontSize: '22px',
                    fontWeight: '700',
                  }}
                >
                  망고리뷰
                </span>
                <ul
                  style={{
                    display: 'flex',
                    color: 'black',
                    listStyle: 'none',
                    justifyContent: 'space-between',
                    width: '30%',
                  }}
                >
                  <li>
                    지역 <KeyboardArrowDownSharpIcon />
                  </li>
                  <li>
                    제품 <KeyboardArrowDownSharpIcon />
                  </li>
                  <li>
                    서비스 <KeyboardArrowDownSharpIcon />
                  </li>
                  <li>
                    기자단 <KeyboardArrowDownSharpIcon />
                  </li>
                </ul>
              </Grid>
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon style={{color: 'black'}} />
              </SearchIconWrapper>
              <StyledInputBase
                style={{color: 'black', borderBottom: '1px solid black'}}
                placeholder='Search…'
                inputProps={{'aria-label': 'search'}}
              />
            </Search>
            <p style={{margin: 'auto 2rem', color: 'black'}}>로그인</p>
            <Button variant='contained'>회원가입</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  )
}
