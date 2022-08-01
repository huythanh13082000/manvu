import React from 'react'
// import logo from './logo.svg'
// import {Counter} from './features/counter/Counter'
import './App.css'
// import MultiActionAreaCard from './components/card'
import Header from './components/header'
import Footer from './components/footer'
import {Button, Grid, TextField} from '@mui/material'
import BasicTabs from './components/tabs'
import {useState} from 'react'
import {useRef} from 'react'
import {useAppDispatch} from './app/hooks'
import {cardAction} from './features/renderCard/renderCardSlice'
import {BrowserRouter as Router, Outlet, Route} from 'react-router-dom'
export default function App() {
  const [count, setCount] = useState(0)
  const dispatch = useAppDispatch()
  const buttonRef = useRef<HTMLInputElement>(null)
  const couter = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Number(e.target.value)
    setCount(newValue)
  }
  // useEffect(() => {}, [])
  // let hanldClick=()=>{
  //   buttonRef.current?.onclick()
  // }
  // const handClick = () => {
  //   console.log(123)
  // }
  //Khai báo một giao diện
  // interface Product {
  //   name: string
  //   price: number
  // }
  // let a =1;
  // //Hàm nhận tham số có giao diện Product
  // function showProduct(product: Product) {
  //   console.log(product.name + ':' + product.price)
  // }

  // //Tạo ba đối tượng
  // var p1 = {name: 'Iphone', price: 500, os: 'IOS10'}
  // var p2 = {name: 'Iphone', price: 'Không biết'}
  // var p3 = {name: 'Iphone', os: 'IOS10'}

  // showProduct(p1) //Ok vì p1 có giao diện Product
  // showProduct(p2);  //Báo Lỗi vì p2 có price kiểu string => khác giao diện Product
  // showProduct(p3);  //Báo Lỗi vì p3 không có thuộc tính price => khác giao diện Product

  return (
    <div className='App'>
      <Header />
      <Grid style={{marginTop: '5rem', padding: '20px 42px'}}>
        <BasicTabs />
      </Grid>
      {/* <Outlet /> */}
      <Footer />
    </div>
  )
}
