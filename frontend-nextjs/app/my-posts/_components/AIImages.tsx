import React from 'react'
import Image from 'next/image'
import p1 from '../../../public/ghibli-art-1759247975856.png'
import p2 from '../../../public/ghibli-art-1759341352949.png'
import p3 from '../../../public/signin-DDAHRbMp.jpg'
import p4 from '../../../public/signup-B42pXhK5.jpg'

const AIImages = () => {
  return (
    <div className='flex flex-1'>
      <div className="w-36 h-36 relative">
        <Image src={p3} alt="ghibli art style image" className='object-cover' fill />
      </div>
      <div className="w-36 h-36 relative">
        <Image src={p4} alt="ghibli art style image" className='object-cover' fill />
      </div>
      <div className="w-36 h-36 relative">
        <Image src={p1} alt="ghibli art style image" className='object-cover' fill />
      </div>
    </div>
  )
}

export default AIImages
