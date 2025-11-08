"use client"

import SigninFloating from '../_floating-page/Signin'


import { Heart, House, LogOut, MessageCircle, PencilLine, ScanFace, Search, Settings, UserRoundCheck } from 'lucide-react';
import Link from 'next/link'
import { floatingPage } from '../store/useFloatingPage';



// handle sidebar items in home page
const itemsUp = [
  { "title": "Home", "icon": <House size={22} className='text-gray-700' /> },
  { "title": "Search", "icon": <Search size={22} className='text-gray-700'/>},
  { "title": "Create", "icon": <PencilLine size={22} className='text-gray-700'/>},
  { "title": "User", "icon": <UserRoundCheck size={22} className='text-gray-700' />}]
  
const itemsDown = [
  { "title": "Messages", "icon": <MessageCircle size={22} className='text-gray-700' /> },
  { "title": "Likes", "icon": <Heart size={22} className='text-gray-700'/>},
  { "title": "Settings", "icon": <Settings size={22} className='text-gray-700'/>},
  { "title": "Log out", "icon": <LogOut size={22} className='text-gray-700' />},
  { "title": "Sign In", "icon": <ScanFace size={22} className='text-gray-700'/>}]


  
const Sidebar = () => {

  const { currentView, setCurrentView } = floatingPage();

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="space-y-2 group cursor-pointer">
        {itemsUp.map((item, idx) => (
          <div key={idx} onClick={() => setCurrentView(item.title)}
            className="flex flex-row items-center gap-4 p-2 hover:bg-gray-100 hover:rounded-xl">
            {item.title === "Home" ?
              <Link href="/" className="flex flex-row items-center gap-4 hover:bg-gray-100 hover:rounded-xl">
                <div className="">{item.icon}</div>
                <div className="text-lg font-light opacity-0 group-hover:opacity-100 group-hover:transition-transform duration-2000">{item.title}</div>
              </Link>
              :
              <>
                <div className="">{item.icon}</div>
                <div className="text-lg font-light opacity-0 group-hover:opacity-100 group-hover:transition-transform duration-2000">{item.title}</div>
              </>
            }
          </div>
        ))}
      </div>

      <div className="space-y-2 group cursor-pointer">
        {itemsDown.map((item, idx) => (
          <div key={idx} onClick={() => setCurrentView(item.title)}
            className="flex flex-row items-center gap-4 p-2 hover:bg-gray-100 hover:rounded-xl" >
            <div className="">{item.icon}</div>
            <div className="text-lg font-light opacity-0 group-hover:opacity-100 group-hover:transition-transform duration-2000">{item.title}</div>
          </div>
        ))}
      </div>

      {currentView === "Sign In" && <SigninFloating/>}
    </div>
  )
}

export default Sidebar
