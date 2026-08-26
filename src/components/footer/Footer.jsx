import React from 'react'

export default function Footer() {
    const listNavbar = [
        {name: 'Home', link:'#'},
        {name: 'Skills', link:'#skills'},
        {name: 'Experience', link:'#experience'},
        {name: 'Language', link:'#language'},
        {name: 'Projects', link:'#projects'},
        
    ];
  return (
   <footer className='bg-darkCard border-t border-slate-800 shadow-lg mt-10 relative z-10'>
      <div className='w-full mx-auto max-w-screen-xl p-6 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-slate-400 sm:text-center'>
            2026 <a href='#' className='hover:text-accentBlue transition-colors'>Portfolio.</a> All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-slate-400 sm:mt-0'>
            {
                listNavbar.map((item, index) =>(
                    <a key={index} href={item.link} className='hover:text-accentBlue transition-colors me-4 md:me-6'>
                        {item.name}
                    </a>
                ))
            }
        </ul>
      </div>
   </footer>
  )
}
