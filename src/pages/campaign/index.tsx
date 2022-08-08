import {Add} from '@mui/icons-material'
import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Tab,
  Tabs,
} from '@mui/material'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import CardBase from '../../components/card'
import './campaign.css'

const Campaign = () => {
  const [value, setValue] = React.useState(0)
  const navigate = useNavigate()
  const [selected, setSelected] = useState<any>([])
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const styleTab = {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#585858',
    padding: '0.5rem 3rem',
  }
  const handleCreateCP = () => {
    navigate('/createcampaign')
  }
  const options: string[] = [
    'Blog',
    'Facebook',
    'Instagram',
    'Youtube',
    'Tiktok',
  ]

  const isAllSelected = options.length > 0 && selected.length === options.length

  const handleChangeSelect = (event: any) => {
    const value = event.target.value
    if (value[value.length - 1] === 'all') {
      setSelected(selected.length === options.length ? [] : options)
      return
    }
    setSelected(value)
  }

  return (
    <Grid>
      <Grid container justifyContent='space-between'>
        <p className='cp-title'>나의 캠페인</p>
        <Button
          variant='outlined'
          className='cp-button'
          onClick={handleCreateCP}
        >
          <Add /> 캠페인을 생성
        </Button>
      </Grid>

      <Tabs
        onChange={handleChange}
        value={value}
        aria-label='Tabs where each tab needs to be selected manually'
        style={{borderBottom: '1px solid #C4C4C4'}}
      >
        <Tab label='신청' style={{...styleTab}} />
        <Tab label='선정' style={{...styleTab}} />
        <Tab label='등록' style={{...styleTab}} />
        <Tab label='수정요청' style={{...styleTab}} />
        <Tab label='종료' style={{...styleTab}} />
      </Tabs>
      {value === 0 ? (
        <>
          <FormControl
            style={{
              width: '200px',
              marginTop: '1rem',
              marginLeft: '1rem',
            }}
          >
            <InputLabel
              id='mutiple-select-label'
              // style={{display: 'flex', justifyItems: 'center'}}
            >
              모두 메이어
            </InputLabel>
            <Select
              labelId='mutiple-select-label'
              multiple
              value={selected}
              onChange={handleChangeSelect}
              renderValue={(selected) => selected.join(', ')}
              label='모두 메이어'
              style={{
                height: '3rem',
                borderRadius: '50px',
                width: '130px',
              }}
            >
              <MenuItem value='all'>
                <ListItemIcon>
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={
                      selected.length > 0 && selected.length < options.length
                    }
                  />
                </ListItemIcon>
                <ListItemText primary='All Media' />
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  <ListItemIcon>
                    <Checkbox checked={selected.indexOf(option) > -1} />
                  </ListItemIcon>
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid item xs={12} container>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>

            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
          </Grid>
        </>
      ) : null}

      {value === 1 ? (
        <>
          <FormControl
            style={{
              width: '200px',
              marginTop: '1rem',
              marginLeft: '1rem',
            }}
          >
            <InputLabel id='mutiple-select-label'>모두 메이어</InputLabel>
            <Select
              labelId='mutiple-select-label'
              multiple
              value={selected}
              onChange={handleChangeSelect}
              renderValue={(selected) => selected.join(', ')}
              label='모두 메이어'
            >
              <MenuItem value='all'>
                <ListItemIcon>
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={
                      selected.length > 0 && selected.length < options.length
                    }
                  />
                </ListItemIcon>
                <ListItemText primary='All Media' />
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  <ListItemIcon>
                    <Checkbox checked={selected.indexOf(option) > -1} />
                  </ListItemIcon>
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid item xs={12} container>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>

            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
          </Grid>
        </>
      ) : null}
      {value === 2 ? (
        <>
          <FormControl
            style={{
              width: '200px',
              marginTop: '1rem',
              marginLeft: '1rem',
            }}
          >
            <InputLabel id='mutiple-select-label'>모두 메이어</InputLabel>
            <Select
              labelId='mutiple-select-label'
              multiple
              value={selected}
              onChange={handleChangeSelect}
              renderValue={(selected) => selected.join(', ')}
              label='모두 메이어'
            >
              <MenuItem value='all'>
                <ListItemIcon>
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={
                      selected.length > 0 && selected.length < options.length
                    }
                  />
                </ListItemIcon>
                <ListItemText primary='All Media' />
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  <ListItemIcon>
                    <Checkbox checked={selected.indexOf(option) > -1} />
                  </ListItemIcon>
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid item xs={12} container>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>

            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
          </Grid>
        </>
      ) : null}
      {value === 3 ? (
        <>
          <FormControl
            style={{
              width: '200px',
              marginTop: '1rem',
              marginLeft: '1rem',
            }}
          >
            <InputLabel id='mutiple-select-label'>모두 메이어</InputLabel>
            <Select
              labelId='mutiple-select-label'
              multiple
              value={selected}
              onChange={handleChangeSelect}
              renderValue={(selected) => selected.join(', ')}
              label='모두 메이어'
            >
              <MenuItem value='all'>
                <ListItemIcon>
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={
                      selected.length > 0 && selected.length < options.length
                    }
                  />
                </ListItemIcon>
                <ListItemText primary='All Media' />
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  <ListItemIcon>
                    <Checkbox checked={selected.indexOf(option) > -1} />
                  </ListItemIcon>
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid item xs={12} container>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>

            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
          </Grid>
        </>
      ) : null}
      {value === 4 ? (
        <>
          <FormControl
            style={{
              width: '200px',
              marginTop: '1rem',
              marginLeft: '1rem',
            }}
          >
            <InputLabel id='mutiple-select-label'>모두 메이어</InputLabel>
            <Select
              labelId='mutiple-select-label'
              multiple
              value={selected}
              onChange={handleChangeSelect}
              renderValue={(selected) => selected.join(', ')}
              label='모두 메이어'
            >
              <MenuItem value='all'>
                <ListItemIcon>
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={
                      selected.length > 0 && selected.length < options.length
                    }
                  />
                </ListItemIcon>
                <ListItemText primary='All Media' />
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  <ListItemIcon>
                    <Checkbox checked={selected.indexOf(option) > -1} />
                  </ListItemIcon>
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid item xs={12} container>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>

            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
          </Grid>
        </>
      ) : null}
      {value === 5 ? (
        <>
          <FormControl
            style={{
              width: '200px',
              marginTop: '1rem',
              marginLeft: '1rem',
            }}
          >
            <InputLabel id='mutiple-select-label'>모두 메이어</InputLabel>
            <Select
              labelId='mutiple-select-label'
              multiple
              value={selected}
              onChange={handleChangeSelect}
              renderValue={(selected) => selected.join(', ')}
              label='모두 메이어'
            >
              <MenuItem value='all'>
                <ListItemIcon>
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={
                      selected.length > 0 && selected.length < options.length
                    }
                  />
                </ListItemIcon>
                <ListItemText primary='All Media' />
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  <ListItemIcon>
                    <Checkbox checked={selected.indexOf(option) > -1} />
                  </ListItemIcon>
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid item xs={12} container>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>

            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
            <Grid>
              <CardBase width='255px' height='355px' />
            </Grid>
          </Grid>
        </>
      ) : null}
    </Grid>
  )
}

export default Campaign
