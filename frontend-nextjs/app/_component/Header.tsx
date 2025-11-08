import Logo from './Logo'
import Navbar from './Sidebar'



const Header = () => {
  return (
    <div className=" bg-gray-200 w-48 flex flex-col space-y-8 min-h-screen p-3">
      <div className=""><Logo /></div>
      <div className="flex flex-col h-full justify-between"><Navbar /></div>
      <div className="text-sm pl-2">Copyright @ {new Date().getFullYear()}</div>
    </div>
  )
}

export default Header
