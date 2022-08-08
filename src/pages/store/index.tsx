import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {Grid} from '@mui/material'
import UploadFile from '../../components/UploadFile'
import './Store.css'
import Campaign from '../campaign'
import LayOut from '../layout'
import PointManagement from '../PointManagement'
import Notice from '../Notice'
import FAQ from '../FAQ'
import Request from '../Request'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanelCustom(props: TabPanelProps) {
  const {children, value, index, ...other} = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0)
  const styleTab = {
    fontFamily: 'Noto Sans KR',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#585858',
    padding: '1.2rem 0',
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <LayOut>
      <Grid container justifyContent='center'>
        <Grid container marginTop='6rem' width='1600px'>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: 'background.paper',
              display: 'flex',
              padding: '0 6rem',
            }}
          >
            <Grid item xs={12} container>
              <Grid item xs={4} style={{borderRight: '1px solid #E1E1E1'}}>
                <Grid item xs={12} container>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={3}>
                    <UploadFile />
                  </Grid>
                  <Grid item xs={7}>
                    <p className='s-p1'>Duzng Nguyen</p>
                    <p className='s-p2'>Duzngnguyen@gmail.com</p>
                  </Grid>
                </Grid>
                <Tabs
                  orientation='vertical'
                  variant='scrollable'
                  value={value}
                  onChange={handleChange}
                  aria-label='Vertical tabs example'
                  sx={{
                    borderRight: 1,
                    borderColor: 'divider',
                    marginLeft: '2rem',
                    paddingTop: '2rem  ',
                  }}
                >
                  <Tab
                    label='나의 캠페인'
                    {...a11yProps(0)}
                    className='s-tab'
                    sx={{...styleTab}}
                  />
                  <Tab
                    label='개인정보수정'
                    {...a11yProps(1)}
                    className='s-tab'
                    sx={{...styleTab}}
                  />
                  <Tab
                    label='포인트 관리'
                    {...a11yProps(2)}
                    className='s-tab'
                    sx={{...styleTab}}
                  />
                  <Tab
                    label='공지사항'
                    {...a11yProps(3)}
                    className='s-tab'
                    sx={{...styleTab}}
                  />
                  <Tab
                    label='1:1문의'
                    {...a11yProps(4)}
                    className='s-tab'
                    sx={{...styleTab}}
                  />
                  <Tab
                    label='완료'
                    {...a11yProps(5)}
                    className='s-tab'
                    sx={{...styleTab}}
                  />
                  <Tab
                    label='설정'
                    {...a11yProps(6)}
                    className='s-tab'
                    sx={{...styleTab}}
                  />
                </Tabs>
              </Grid>
              <Grid item xs={8}>
                <TabPanelCustom value={value} index={0}>
                  <Campaign />
                </TabPanelCustom>
                <TabPanelCustom value={value} index={1}></TabPanelCustom>
                <TabPanelCustom value={value} index={2}>
                  <PointManagement />
                </TabPanelCustom>
                <TabPanelCustom value={value} index={3}>
                  <Notice />
                </TabPanelCustom>
                <TabPanelCustom value={value} index={4}>
                  <Request />
                </TabPanelCustom>
                <TabPanelCustom value={value} index={5}>
                  <FAQ />
                </TabPanelCustom>
                <TabPanelCustom value={value} index={6}>
                  Item Five223
                </TabPanelCustom>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </LayOut>
  )
}
