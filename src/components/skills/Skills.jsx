import React from 'react'
import javascript from '../../assets/javascript.png'
import html from '../../assets/html.png'
import php from '../../assets/php.png'
import webdesign from '../../assets/web-design.png'
import laravel from '../../assets/laravel.png'
import react from '../../assets/react.png'

export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
            <div 
            data-aos='fade-up' 
            data-aos-delay='200' 
            className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-accentPurple/50'>
                <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-bold title-font mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-accentPurple'>Skills</h1>
                <h2 className='title-font font-semibold text-accentBlue sm:text-2xl mt-4 mb-2'>Frontend Technologies :</h2>    
                <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base text-slate-300'>
                <span className="text-accentTeal">▹</span> React.js, Tailwind CSS, HTML5, CSS3, Vite, Material-UI (MUI)
                </p>
                <h2 className='title-font font-semibold text-accentBlue sm:text-2xl mt-6 mb-2'>Backend & Database :</h2> 
                <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base text-slate-300'>
                <span className="text-accentTeal">▹</span> Node.js, Express.js, MongoDB Atlas, RESTful APIs, SQL              
                </p> 
                <h2 className='title-font font-semibold text-accentBlue sm:text-2xl mt-6 mb-2'>Languages :</h2> 
                <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base text-slate-300'>
                 <span className="text-accentTeal">▹</span> JavaScript (ES6+), Java, C, SQL             
                </p>
                <h2 className='title-font font-semibold text-accentBlue sm:text-2xl mt-6 mb-2'>Tools & Testing :</h2> 
                <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base text-slate-300'>
                 <span className="text-accentTeal">▹</span> Git, GitHub, Jest, React Testing Library, Postman             
                </p>

            </div>
            <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
            <nav className='flex flex-wrap list-none -mb-1'>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={javascript} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={html} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={php} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={webdesign} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={laravel} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={react} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
            </nav>
            </div>
        </div>
    </section>
  )
}
