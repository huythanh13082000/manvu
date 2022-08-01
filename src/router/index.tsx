import {ReactElement} from 'react'
import {
  Route,
  RouteProps,
  Routes,
  RoutesProps,
  useNavigate,
} from 'react-router-dom'
import Login from '../components/login'
import MyRouteProp from './MyRouteProp'
import PrivateRoute from './privateRoute'
import routes from './routes'
// export * from './MyRouteProp'
const Router = () => {
  const auth = false
  // let navigate = useNavigate()
  return (
    <Routes>
      {routes.map((item: MyRouteProp) => {
        console.log(123, item)
        // if (item.private) {
        //   return <Route path='/login' element={<Login />} />
        // } else {
        if (item.private) {
          return <Route {...item} element={<PrivateRoute item={item} />} />
        } else {
          return <Route {...item} />
        }

        // }
      })}
    </Routes>
  )
}
export default Router
