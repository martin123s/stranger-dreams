import { Heart, House, LogOut, MessageCircle, PencilLine, ScanFace, Search, Settings, UserRoundCheck } from 'lucide-react';
import Link from 'next/link'


// handle main functions in home page
const navbar = [
  { "title": "Home", "icon": <House size={22} className='text-gray-700' />, "path":"/" },
  { "title": "Search", "icon": <Search size={22} className='text-gray-700'/>, "path":"/search" },
  { "title": "Create", "icon": <PencilLine size={22} className='text-gray-700'/>, "path":"/create" },
  { "title": "User", "icon": <UserRoundCheck size={22} className='text-gray-700' />, "path":"/posts" }]
  
// handle other functions in home page
const others = [
  { "title": "Messages", "icon": <MessageCircle size={22} className='text-gray-700' />, "path":"/message" },
  { "title": "Likes", "icon": <Heart size={22} className='text-gray-700'/>, "path":"/likes" },
  { "title": "Settings", "icon": <Settings size={22} className='text-gray-700'/>, "path":"/settings" },
  { "title": "Log out", "icon": <LogOut size={22} className='text-gray-700' />, "path":"/logout" },
  { "title": "Sign In", "icon": <ScanFace size={22} className='text-gray-700'/>, "path":"/signin" }]

  
const Navbar = () => {
  return (
    <div className="flex flex-col h-full justify-between">
        <div className="space-y-2 group cursor-pointer">
          {navbar.map((item, idx) => (
            <Link key={idx} href={item.path} className="flex flex-row items-center gap-4 p-2 hover:bg-gray-100 hover:rounded-xl">
              <div className="">{item.icon}</div>
              <div className="text-lg font-light opacity-0 group-hover:opacity-100 group-hover:transition-transform duration-2000">{item.title}</div>
            </Link>
          ))}
        </div>

        <div className="space-y-2 group cursor-pointer">
        {others.map((item, idx) => (
          <Link key={idx} href={item.path} className="flex flex-row items-center gap-4 p-2 hover:bg-gray-100 hover:rounded-xl" >
            <div className="">{item.icon}</div>
            <div className="text-lg font-light opacity-0 group-hover:opacity-100 group-hover:transition-transform duration-2000">{item.title}</div>
          </Link>
          ))}
        </div>
      </div>
  )
}

export default Navbar
