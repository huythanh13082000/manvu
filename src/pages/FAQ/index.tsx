import {Grid, Tab, Tabs} from '@mui/material'
import React from 'react'
import './FAQ.css'

const FAQ = () => {
  const [value, setValue] = React.useState(0)
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
  return (
    <Grid>
      <p className='FAQ-title'>완료</p>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label='Tabs where each tab needs to be selected manually'
        style={{borderBottom: '1px solid #C4C4C4'}}
      >
        <Tab label='주제_1' style={{...styleTab}} />
        <Tab label='주제_2' style={{...styleTab}} />
        <Tab label='주제_3' style={{...styleTab}} />
        <Tab label='주제_4' style={{...styleTab}} />
        <Tab label='주제_5' style={{...styleTab}} />
        <Tab label='주제_7' style={{...styleTab}} />
        <Tab label='주제_7' style={{...styleTab}} />
      </Tabs>
      {value === 0 ? (
        <>
          <Grid padding='1.5rem 0'>
            <p className='FAQ-p1'>
              평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
              민주평화통일자문회의를 둘 수 있다?
            </p>
            <p className='FAQ-p2'>06/08/2022</p>
          </Grid>

          <Grid borderBottom='1px solid #E1E1E1'></Grid>

          <Grid padding='1.5rem 0'>
            <p className='FAQ-p1'>
              평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
              민주평화통일자문회의를 둘 수 있다?
            </p>
            <p className='FAQ-p2'>06/08/2022</p>
          </Grid>

          <Grid borderBottom='1px solid #E1E1E1'></Grid>

          <Grid padding='1.5rem 0'>
            <p className='FAQ-p1'>
              평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
              민주평화통일자문회의를 둘 수 있다?
            </p>
            <p className='FAQ-p2'>06/08/2022</p>
          </Grid>

          <Grid borderBottom='1px solid #E1E1E1'></Grid>

          <Grid padding='1.5rem 0'>
            <p className='FAQ-p1'>
              평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
              민주평화통일자문회의를 둘 수 있다?
            </p>
            <p className='FAQ-p2'>06/08/2022</p>
          </Grid>

          <Grid borderBottom='1px solid #E1E1E1'></Grid>

          <Grid padding='1.5rem 0'>
            <p className='FAQ-p1'>
              평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
              민주평화통일자문회의를 둘 수 있다?
            </p>
            <p className='FAQ-p2'>06/08/2022</p>
          </Grid>
        </>
      ) : null}
    </Grid>
  )
}

export default FAQ
