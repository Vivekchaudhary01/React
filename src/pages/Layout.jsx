import { Outlet } from 'react-router-dom' // used to display children components on UI
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>  {/* It is uesd to render Children Routes. */}
    </div>
  )
}

export default Layout