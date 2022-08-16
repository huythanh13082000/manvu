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
import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import CardBase from '../../components/card'
// import {Campaign} from '../../models/campaign'
import {
  myCampaignActions,
  selectMemberCampaignMine,
  selectMemberCampaignMineCount,
} from '../MyCampaign/MyCampaignSlice'
import './campaign.css'

const CampaignPage = () => {
  const [value, setValue] = React.useState(0)
  const navigate = useNavigate()
  const [type, setType] = useState<string>()
  const [selected, setSelected] = useState<any>([])
  const dispatch = useAppDispatch()
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    switch (newValue) {
      case 0:
        setType('pending')
        setSelected([])
        break
      case 1:
        setType('accepted')
        setSelected([])
        break
      case 2:
        setType('requesting_update')
        setSelected([])
        break
      case 3:
        setType('posted')
        setSelected([])
        break
      case 4:
        setType('ended')
        setSelected([])
        break
      default:
        break
    }
  }
  const memberCampaignMineCount = useAppSelector(selectMemberCampaignMineCount)
  const listCampaignSelect = useAppSelector(selectMemberCampaignMine)

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
    'blog_naver',
    'facebook',
    'instagram',
    'youtube',
    'tiktok',
    'twitter',
  ]
  const isAllSelected = options.length > 0 && selected.length === options.length

  const handleChangeSelect = async (event: any) => {
    const value = event.target.value
    if (value[value.length - 1] === 'all') {
      setSelected(selected.length === options.length ? [] : options)
      return
    }
    setSelected(value)
  }
  useEffect(() => {
    dispatch(
      myCampaignActions.getMemberCampaignMine({
        type: type || 'pending',
        medias: JSON.stringify(selected),
      })
    )
  }, [dispatch, selected, type])

  useEffect(() => {
    dispatch(myCampaignActions.getMemberCampaignMineCount())
    dispatch(myCampaignActions.getMemberCampaignMine({type: 'pending'}))
  }, [dispatch])
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
        <Tab
          icon={
            <p className='cp-ptab'>{memberCampaignMineCount?.countPending}</p>
          }
          label={`신청`}
          style={{...styleTab}}
          iconPosition='end'
        />
        <Tab
          icon={
            <p className='cp-ptab'>{memberCampaignMineCount?.countAccepted}</p>
          }
          label='선정'
          style={{...styleTab}}
          iconPosition='end'
        />
        <Tab
          icon={
            <p className='cp-ptab'>
              {memberCampaignMineCount?.countRequestingUpdate}
            </p>
          }
          label='수정'
          style={{...styleTab}}
          iconPosition='end'
        />
        <Tab
          icon={
            <p className='cp-ptab'>{memberCampaignMineCount?.countPosted}</p>
          }
          label='등록'
          style={{...styleTab}}
          iconPosition='end'
        />
        <Tab
          icon={
            <p className='cp-ptab'>{memberCampaignMineCount?.countEnded}</p>
          }
          label='종료'
          style={{...styleTab}}
          iconPosition='end'
        />
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
            <InputLabel id='mutiple-select-label'>모두 메이어</InputLabel>
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
            {listCampaignSelect?.list?.map((item) => {
              return (
                <Grid>
                  <CardBase
                    key={item.id}
                    width='252px'
                    height='360px'
                    data={item}
                  />
                </Grid>
              )
            })}
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
            {listCampaignSelect?.list?.map((item) => {
              return (
                <Grid>
                  <CardBase
                    key={item.id}
                    width='252px'
                    height='360px'
                    data={item}
                  />
                </Grid>
              )
            })}
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
            {listCampaignSelect?.list?.map((item) => {
              return (
                <Grid>
                  <CardBase
                    key={item.id}
                    width='252px'
                    height='360px'
                    data={item}
                  />
                </Grid>
              )
            })}
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
            {listCampaignSelect?.list?.map((item) => {
              return (
                <Grid>
                  <CardBase
                    key={item.id}
                    width='252px'
                    height='360px'
                    data={item}
                  />
                </Grid>
              )
            })}
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
            {listCampaignSelect?.list?.map((item) => {
              return (
                <Grid>
                  <CardBase
                    key={item.id}
                    width='252px'
                    height='360px'
                    data={item}
                  />
                </Grid>
              )
            })}
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
            {listCampaignSelect?.list?.map((item) => {
              return (
                <Grid>
                  <CardBase
                    key={item.id}
                    width='252px'
                    height='360px'
                    data={item}
                  />
                </Grid>
              )
            })}
          </Grid>
        </>
      ) : null}
    </Grid>
  )
}

export default CampaignPage
