import React, {ReactNode} from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
type Props = {
  children: ReactNode
}
const LayOut: React.FC<Props> = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default LayOut
