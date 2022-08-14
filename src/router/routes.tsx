import ForgotPW from '../components/ForgotPassword'
import NotFound from '../components/notfound'
import MyRouteProp from './MyRouteProp'
import TermsOfUse from '../components/TermsOfUse'
import Home from '../pages/home'
import Service from '../pages/Service'
import MyCampaign from '../pages/MyCampaign'
import CreateCampaign from '../pages/CreateCampaign'
import WithdrawMoney from '../pages/WithdrawMoney'
import RegisterCompany from '../pages/RegisterCompany'
import Login from '../pages/login'
import Register from '../pages/Register'
import RegisterAccount from '../pages/RegisterAccount'
import CompanyCampaigns from '../pages/CompanyCampaigns'
import ProductDetail from '../pages/CampaignDetail'
import {Url} from '../contains'
const routes: Array<MyRouteProp> = [
  {
    path: Url.login,
    element: <Login />,
    private: false,
    roles: ['user', 'admin', 'super'],
  },
  {
    path: Url.forgotpassword,
    element: <ForgotPW />,
    private: false,
  },
  {
    path: Url.termsofuse,
    element: <TermsOfUse />,
    private: false,
  },
  {
    path: Url.register,
    element: <Register />,
    private: false,
  },
  {
    path: Url.registerCompany,
    element: <RegisterCompany />,
    private: false,
  },
  {
    path: Url.registerAccount,
    element: <RegisterAccount />,
    private: false,
  },
  {
    path: Url.productDetail,
    element: <ProductDetail />,
    private: false,
  },
  {
    path: '/',
    element: <Home />,
    private: false,
    roles: ['admin', 'user'],
  },
  {
    path: Url.home,
    element: <Home />,
    private: false,
    roles: ['admin', 'user'],
  },
  {
    path: Url.service,
    element: <Service />,
    private: true,
    roles: ['admin', 'user'],
  },
  {
    path: Url.companyCampaigns,
    element: <CompanyCampaigns />,
    private: true,
    roles: ['admin', 'user'],
  },
  {
    path: Url.MyCampaign,
    element: <MyCampaign />,
    private: true,
    roles: ['admin', 'user'],
  },
  {
    path: Url.createCampaign,
    element: <CreateCampaign />,
    private: true,
    roles: ['admin', 'user'],
  },
  {path: '/admin', element: <p>admin</p>, private: true},
  {
    path: Url.notfound,
    element: <NotFound />,
    private: false,
  },
  {
    path: Url.WithdrawMoney,
    element: <WithdrawMoney />,
    private: false,
  },
]
export default routes
