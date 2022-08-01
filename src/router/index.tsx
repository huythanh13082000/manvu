import {ReactElement} from 'react'
import {Route, RouteProps, Routes, RoutesProps} from 'react-router-dom'
import MyRouteProp from './MyRouteProp'
import routes from './routes'

// export * from './MyRouteProp'
const Router = () => {
  return (
    <Routes>
      {routes.map((item: MyRouteProp) => {
        return <Route {...item} />
      })}
    </Routes>
  )
}
export default Router
