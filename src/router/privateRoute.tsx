//TODO: CHECK AUTH IF IS NOT AUTH redirect
import React from 'react'
import {Navigate} from 'react-router-dom'
import MyRouteProp from './MyRouteProp'
interface Props {
  item: MyRouteProp
}
function PrivateRoute(props: Props) {
  const auth: boolean = true
  if (auth) {
    return <>{props.item.element}</>
  } else {
    return <Navigate to='/login' />
  }
}

export default PrivateRoute
