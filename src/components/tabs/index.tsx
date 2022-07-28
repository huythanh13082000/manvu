import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import MultiActionAreaCard from '../card'
import {Grid} from '@mui/material'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}} style={{padding: 0}}>
          <Grid container rowSpacing={1} columnSpacing={{xs: 5, sm: 5, md: 7}}>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            <Grid item>
              <Typography>{children}</Typography>
            </Grid>
            {/* <Typography>{children}</Typography>
            <Typography>{children}</Typography>
            <Typography>{children}</Typography>

            <Typography>{children}</Typography>
            <Typography>{children}</Typography>
            <Typography>{children}</Typography>
            <Typography>{children}</Typography>

            <Typography>{children}</Typography>
            <Typography>{children}</Typography>
            <Typography>{children}</Typography>
            <Typography>{children}</Typography> */}
          </Grid>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='전체' {...a11yProps(0)} />
          <Tab label='생활' {...a11yProps(1)} />
          <Tab label='유아동' {...a11yProps(2)} />
          <Tab label='디지털' {...a11yProps(3)} />
          <Tab label='뷰티' {...a11yProps(4)} />
          <Tab label='패션' {...a11yProps(5)} />
          <Tab label='식품' {...a11yProps(6)} />
          <Tab label='반려동물' {...a11yProps(7)} />
          <Tab label='도서' {...a11yProps(8)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MultiActionAreaCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  )
}
