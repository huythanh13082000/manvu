import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {Grid} from '@mui/material'
import LayOut from '../layout'
// import PointManagement from '../PointManagement'
// import Notice from '../Notice'
// import FAQ from '../FAQ'
// import Request from '../Request'
import CompanyCampaign from '../CompanyCampaign'
import './CompanyCampaign.css'

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

export default function CompanyCampaigns() {
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
                  <Grid item xs={2}>
                    <img
                      src='/img/avarta.png'
                      alt='avatar'
                      style={{
                        width: '75px',
                        height: '75px',
                      }}
                    />
                  </Grid>
                  <Grid width='1rem'></Grid>
                  <Grid item xs={7}>
                    <p className='ccp-p1'>Fanta VietNam</p>
                    <p className='ccp-p2'>Duzngnguyen@gmail.com</p>
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
                    label='?????? ?????????'
                    {...a11yProps(0)}
                    className='ccp-tab'
                    sx={{...styleTab}}
                  />
                  <Tab
                    label='????????? ????????????'
                    {...a11yProps(1)}
                    className='ccp-tab'
                    sx={{...styleTab}}
                  />
                  <Tab
                    label='??????????????????'
                    {...a11yProps(2)}
                    className='ccp-tab'
                    sx={{...styleTab}}
                  />
                  <Tab
                    label='1:1??????'
                    {...a11yProps(3)}
                    className='ccp-tab'
                    sx={{...styleTab}}
                  />
                  <Tab
                    label='FAQ'
                    {...a11yProps(4)}
                    className='ccp-tab'
                    sx={{...styleTab}}
                  />
                  <Tab
                    label='??????'
                    {...a11yProps(5)}
                    className='ccp-tab'
                    sx={{...styleTab}}
                  />
                </Tabs>
              </Grid>
              <Grid item xs={8}>
                <TabPanelCustom value={value} index={0}>
                  <CompanyCampaign />
                </TabPanelCustom>
                <TabPanelCustom value={value} index={1}></TabPanelCustom>
                <TabPanelCustom value={value} index={2}>
                  {/* <PointManagement /> */}
                </TabPanelCustom>
                <TabPanelCustom value={value} index={3}>
                  {/* <Notice /> */}
                </TabPanelCustom>
                <TabPanelCustom value={value} index={4}>
                  {/* <Request /> */}
                </TabPanelCustom>
                <TabPanelCustom value={value} index={5}>
                  {/* <FAQ /> */}
                </TabPanelCustom>
                <TabPanelCustom value={value} index={6}></TabPanelCustom>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </LayOut>
  )
}
