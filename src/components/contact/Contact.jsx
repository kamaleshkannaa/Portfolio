import React from 'react'

export default function Contact() {
  return (
    <section id='contact' data-aos='fade-up' data-aos-delay='400'>
        <div className='py-8 lg:py-16 mx-auto max-w-screen-md'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-white'>Contact Me</h2>
            <div className='flex flex-wrap justify-center gap-6 mb-12 text-slate-400'>
                <div className='flex items-center gap-2'>
                    <svg className="w-5 h-5 text-accentBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span>+91 6379227207</span>
                </div>
                <div className='flex items-center gap-2'>
                    <svg className="w-5 h-5 text-accentPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <a href="mailto:kamaleshk630@gmail.com" className="hover:text-accentPurple transition-colors">kamaleshk630@gmail.com</a>
                </div>
                <div className='flex items-center gap-2'>
                    <svg className="w-5 h-5 text-accentTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span>Ariyalur, India</span>
                </div>
            </div>
            <form action='#' className='space-y-8'>
                <div>
                    <label htmlFor='email' className='block mb-2 text-xl font-medium text-slate-300'>Email</label>
                    <input 
                    type='email' 
                    id='email' 
                    className='shadow-sm bg-darkCard/80 backdrop-blur-sm border border-slate-700 text-white text-sm rounded-lg focus:ring-accentBlue focus:border-accentBlue block w-full p-2.5 outline-none transition-colors' 
                    placeholder='name@example.com' required/>
                </div>
                <div className='sm:col-span-2'>
                    <label htmlFor='message' className='block mb-2 text-xl font-medium text-slate-300'>Message</label>
                    <textarea 
                    rows="6"
                    id='message' 
                    className='shadow-sm bg-darkCard/80 backdrop-blur-sm border border-slate-700 text-white text-sm rounded-lg focus:ring-accentBlue focus:border-accentBlue block w-full p-2.5 outline-none transition-colors' 
                    placeholder='Leave a message ...' required/>
                </div>
                <button className='inline-flex text-white bg-darkCard border border-slate-700 py-2 px-8 focus:outline-none hover:border-accentPurple hover:text-accentPurple hover:shadow-[0_0_20px_rgba(138,43,226,0.3)] transition-all duration-300 rounded-full text-lg'>
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}
