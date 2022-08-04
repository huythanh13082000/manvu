import React from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import {Grid} from '@mui/material'
import BasicTabs from './components/tabs'
import CardCampaign from './components/CardCampaign'
// import {useState} from 'react'
// import {useRef} from 'react'
// import {useAppDispatch} from './app/hooks'
// import {cardAction} from './features/renderCard/renderCardSlice'

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Grid style={{marginTop: '5rem', padding: '20px 42px'}}>
        <BasicTabs />
      </Grid>
      <CardCampaign />
      <Footer />
    </div>
  )
}
