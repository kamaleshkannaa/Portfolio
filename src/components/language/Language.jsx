import React from 'react'

export default function Language() {
    const languages = [
        {code:'EN', name:'English', level:'Maternal'},
        {code:'TN', name:'TAMIL', level:'Native'},
    ];
  return (
    <section id="language" data-aos='fade-up' data-aos-delay='400' className='flex flex-wrap md:flex-nowrap items-center justify-center gap-10 md:gap-20 h-[300px] text-blue-950 mt-11 relative z-10'>
        <div className='grid grid-cols-2 gap-10 md:flex md:gap-20'>
            {
                languages.map((language, index)=>(
                    <div key={index} className='achievement flex flex-col items-center'>
                        <div className='circle w-20 h-20 md:w-16 md:h-16 bg-darkCard rounded-full relative flex items-center justify-center text-lg md:text-xl font-bold mb-6 md:mb-8 shadow-[0_0_15px_rgba(0,255,204,0.3)]'>
                            <span className='z-10 text-white'>{language.code}</span>
                            <div className='absolute top-[-4px] left-[-4px] right-[-4px] bottom-[-4px] rounded-full bg-gradient-to-tr from-accentBlue to-accentPurple shadow-[0_0_15px_rgba(138,43,226,0.5)] z-0'></div>
                        </div>
                        <span className='text-xl md:text-xl text-white font-medium'>{language.name}</span>
                        <span className='text-accentTeal text-lg md:text-xl font-bold mt-1'>{language.level}</span>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
