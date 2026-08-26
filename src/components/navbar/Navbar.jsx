import React from 'react'

export default function Navbar() {
    const listNavbar = [
        {name: 'Home', link:'#home'},
        {name: 'Skills', link:'#skills'},
        {name: 'Experience', link:'#experience'},
        {name: 'Language', link:'#language'},
        {name: 'Projects', link:'#projects'},
        {name: 'Achievements', link:'#achievements'},
    ];
  return (
    <header data-aos='fade-up' className='text-slate-300 body-font z-20 relative'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <a className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
                <span className='ml-3 text-3xl font-bold tracking-tight'>Portfolio</span>
            </a>
            <nav className='md:ml-auto text-slate-300 text-base md:mr-auto flex flex-wrap items-center justify-center'>
                {
                    listNavbar.map((item, index) =>(
                        <a key={index} href={item.link} className='mr-5 font-medium hover:text-accentBlue transition-colors duration-300'>
                            {item.name}
                        </a>
                    ))
                }
            </nav>
            <button className='inline-flex items-center py-2 px-7 focus:outline-none text-base text-white mt-4 md:mt-0 
             border border-slate-700 bg-darkCard/50 backdrop-blur-sm rounded-full hover:border-accentPurple hover:text-accentPurple hover:shadow-[0_0_15px_rgba(138,43,226,0.3)] transition-all duration-300'>
                <a href='#contact'>Contact me</a>
            </button>
        </div>
    </header>
  )
}
