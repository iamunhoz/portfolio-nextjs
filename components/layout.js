import TopBar from './topbar'
import SideBar from './sidebar'

export default function Layout({children}) {
  return (
  <div>
    <TopBar/>
    <div style={{display: 'flex'}}>
      <SideBar/>
      {children}
    </div>
  </div>)
}