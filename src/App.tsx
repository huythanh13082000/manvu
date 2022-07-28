import React from 'react'
import logo from './logo.svg'
import {Counter} from './features/counter/Counter'
import './App.css'
import MultiActionAreaCard from './components/card'
import Header from './components/header'
import Footer from './components/footer'
import {Grid} from '@mui/material'

function App() {
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
      <Grid style={{marginTop: '5rem'}}>
        <MultiActionAreaCard />
      </Grid>

      <Footer />
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span onClick={handClick}>Learn </span>
          <a
            className='App-link'
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux-toolkit.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className='App-link'
            href='https://react-redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  )
}

export default App
