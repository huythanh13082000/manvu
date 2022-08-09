import ForgotPW from '../components/ForgotPassword'
import NotFound from '../components/notfound'
import MyRouteProp from './MyRouteProp'
import TermsOfUse from '../components/TermsOfUse'
import Home from '../pages/home'
import Service from '../pages/Service'
import Store from '../pages/store'
import ProductDatail from '../pages/ProductDetail'
import CreateCampaign from '../pages/CreateCampaign'
import WithdrawMoney from '../pages/WithdrawMoney'
import RegisterCompany from '../pages/RegisterCompany'
import Login from '../pages/login'
import Register from '../pages/Register'
import RegisterAccount from '../pages/RegisterAccount'
const routes: Array<MyRouteProp> = [
  {
    path: '/login',
    element: <Login />,
    private: false,
    roles: ['user', 'admin', 'super'],
  },
  {
    path: '/login/forgotpassword',
    element: <ForgotPW />,
    private: false,
  },
  {
    path: '/termsofuse',
    element: <TermsOfUse />,
    private: false,
  },
  {
    path: '/register',
    element: <Register />,
    private: false,
  },
  {
    path: '/registercompany',
    element: <RegisterCompany />,
    private: false,
  },
  {
    path: '/registeraccount',
    element: <RegisterAccount />,
    private: false,
  },
  {
    path: '/productdetail',
    element: <ProductDatail />,
    private: false,
  },
  // {
  //   path: '/register',
  //   element: <Register />,
  //   private: false,
  // },
  {
    path: '/',
    element: <Home />,
    private: true,
    roles: ['admin', 'user'],
  },
  {
    path: '/home',
    element: <Home />,
    private: true,
    roles: ['admin', 'user'],
  },
  {
    path: '/service',
    element: <Service />,
    private: true,
    roles: ['admin', 'user'],
  },
  {
    path: '/store',
    element: <Store />,
    private: true,
    roles: ['admin', 'user'],
  },
  {
    path: '/createcampaign',
    element: <CreateCampaign />,
    private: true,
    roles: ['admin', 'user'],
  },
  {path: '/admin', element: <p>admin</p>, private: true},
  {
    path: '/notfound',
    element: <NotFound />,
    private: false,
  },
  {
    path: '/WithdrawMoney',
    element: <WithdrawMoney />,
    private: false,
  },
]
export default routes
