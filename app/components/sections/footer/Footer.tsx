import React from 'react'
import {Button} from '../../utils/Button'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-black text-white mx-auto border-t-2 border-grey-dark">
        <div className='items-center grid grid-cols-2  gap-20 flex-col text-sm h-[245px]  opacity-100  relative '>
            <div className='flex-row justify-start '>
                <h2 className='text-lg mb-14 '>Never far from your reach, and alway delighted to hear from you.</h2>
                <Button href='#'>
                    Get in touch
                </Button>
            </div>
            <div className='flex flex-row md:flex-col '>
                <div className='flex flex-col mb-8 text-sm'>
               <h1>explore</h1> 
                </div>
                <div className='grid grid-cols-2 text-xs text-grey '>
            
                <ul >
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Songs</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Linkedin</li>
                </ul>
                </div>
                </div>
        </div>
        </footer>
        
  )
}

export default Footer