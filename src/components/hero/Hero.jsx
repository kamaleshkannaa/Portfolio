// import React from 'react'
// import Navbar from '../navbar/Navbar'
// import hi from '../../assets/hi.png'
// import CV from './CV.pdf'
// import img from '../../assets/img.png'

// export default function Hero() {
//   return (
//     <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
//         <div className='md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-orange-600 
//         via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255, 165, 0, 0.7)]'
//         >
//         </div>
//         <Navbar /> 
//         <section 
//         data-aos='fade-up'
//         data-aos-delay='250'
//         className='text-white body-font z-10'>
//             <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
//                 <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
//                 mb-16 md:mb-0 items-center text-center relative'>
//                     <img src={hi} data-aos='fade-up' data-aos-delay='400'
//                      className='absolute top-[350px] left-30 md:top-[-30px] md:left-[320px] transform
//                     -translate-x-1/2 -translate-y-1/2 w-20 h-20'/>
//                 <h1 className='title-font sm:text-4xl text-4xl mb-4 font-bold text-white'>Hi! I'm KAMALESH</h1>
//                 <p className='mb-8 leading-relaxed'>Hi, I'm a passionate web developer specializing in React.js, Tailwind CSS, and Vite. I love building clean, modern, and responsive websites that provide seamless user experiences.
// I recently worked on a "Leave Request and Approval" system, showcasing my ability to build full-stack applications using React.js and MongoDB Atlas. I also have experience in frontend development, UI/UX design, and optimizing web performance. 
//                 </p>
//                 <div className='flex justify-center '>
//                     <a href={CV} download> 
//                         <button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 
//                         focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
//                         rounded-full text-lg'>
//                             Download CV
//                         </button>
//                     </a>
//                     <a href='https://github.com/kamaleshkannaa' download> 
//                         <button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 ml-3
//                         focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
//                         rounded-full text-lg'>
//                             GITHUB
//                         </button>  
//                     </a>
//                     <a href='https://www.linkedin.com/in/kamalesh-kannaa-i-080343307/' download> 
//                         <button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 ml-3
//                         focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
//                         rounded-full text-lg'>
//                             LINKEDIN
//                         </button>  
//                     </a>
//                 </div>
//                 </div>
//                 <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
//                    <img src={img} alt="hero" className='object-cover object-center rounded-full w-80 h-80' />
//                 </div>
//             </div>
//         </section>
//     </div>
//   )
// }


import React from 'react'
import Navbar from '../navbar/Navbar'
import hi from '../../assets/hi.png'
import CV from './CV.pdf'
import img from '../../assets/img.png'

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
        {/* Background Gradient */}
        <div className='absolute right-0 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 
        rounded-full transform rotate-12 -top-20 w-[880px] h-[960px] md:w-[640px] md:h-[720px] 
        shadow-[0_0_40px_rgb(255, 165, 0, 0.7)]'>
        </div>

        <Navbar /> 

        <section data-aos='fade-up' data-aos-delay='250' className='text-white body-font z-10'>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>

                {/* Left Section */}
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start 
                md:text-left mb-16 md:mb-0 items-center text-center relative'>

                    {/* Hi Image */}
                    <div className='flex justify-center md:justify-start w-full mb-2'>
                        <img src={hi} data-aos='fade-up' data-aos-delay='400' 
                        className='w-16 h-16 sm:w-20 sm:h-20' alt="hi"/>
                    </div>

                    <h1 className='title-font sm:text-4xl text-4xl mb-4 font-bold text-white'>
                        I'm KAMALESH
                    </h1>

                    <p className='mb-8 leading-relaxed'>
                        Hi, I'm a passionate web developer specializing in React.js, Tailwind CSS, and Vite. 
                        I love building clean, modern, and responsive websites that provide seamless user experiences.
                        I recently worked on a "Leave Request and Approval" system, showcasing my ability to build 
                        full-stack applications using React.js and MongoDB Atlas. I also have experience in frontend 
                        development, UI/UX design, and optimizing web performance. 
                    </p>

                    {/* Buttons */}
                    <div className='flex flex-wrap justify-center md:justify-start gap-3'>
                    <a href={CV} download>
  <button className="relative overflow-hidden h-12 px-8 rounded-full bg-[#3d3a4e] text-white border-none cursor-pointer group">
    
    {/* Gradient overlay on hover */}
    <span className="absolute inset-0 scale-x-0 origin-left transition-transform duration-[475ms] rounded-full bg-gradient-to-r from-[#965de9] via-[#6358ee] to-[#6358ee] group-hover:scale-x-100"></span>
    
    {/* Button text */}
    <span className="relative z-10 text-lg">Download CV</span>

  </button>
</a>

                        <a href="https://github.com/kamaleshkannaa" target="_blank" rel="noopener noreferrer">
  <div className="relative w-12 h-12 group">
    {/* Background layer */}
    <div className="absolute inset-0 rounded-xl bg-black transition-transform duration-500 ease-in-out group-hover:rotate-[50deg] origin-bottom shadow-lg"></div>

    {/* Foreground icon container */}
    <div className="absolute inset-0 flex items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm z-10 group-hover:bg-white/20 transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 
          0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234
          c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756
          -1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237
          1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604
          -2.665-.305-5.467-1.334-5.467-5.931 
          0-1.311.469-2.381 1.236-3.221
          -.124-.303-.535-1.524.117-3.176 
          0 0 1.008-.322 3.301 1.23
          .957-.266 1.983-.399 3.003-.404 
          1.02.005 2.047.138 3.006.404 
          2.291-1.552 3.297-1.23 3.297-1.23
          .653 1.653.242 2.874.118 3.176 
          .77.84 1.235 1.911 1.235 3.221 
          0 4.609-2.807 5.624-5.479 5.921
          .43.372.823 1.102.823 2.222v3.293
          c0 .319.192.694.801.576 
          4.765-1.589 8.199-6.086 8.199-11.386 
          0-6.627-5.373-12-12-12z" />
      </svg>
    </div>
  </div>
</a>





<a href="https://www.linkedin.com/in/kamalesh-kannaa-i-080343307/" target="_blank" rel="noopener noreferrer">
  <div className="relative w-12 h-12 cursor-pointer group">
    {/* Base button with border */}
    <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-white/40 transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-sm z-10">
      {/* LinkedIn Icon */}
      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8.5h4.5v13H.25v-13zM8.98 8.5h4.31v1.79h.06c.6-1.14 2.06-2.35 4.23-2.35 4.52 0 5.35 2.97 5.35 6.83v7.73H18v-6.86c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.63v6.98H8.98v-13z" />
      </svg>
    </div>

    {/* Rotating background on hover */}
    <div className="absolute inset-0 bg-[#0077b5] rounded-lg z-0 transition-transform duration-300 ease-in-out group-hover:rotate-[50deg] origin-bottom"></div>
  </div>
</a>






                    </div>
                </div>

                {/* Right Section (Profile Image) */}
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center'>
                   <img src={img} alt="hero" className='object-cover object-center rounded-full w-72 h-72 sm:w-80 sm:h-80' />
                </div>

            </div>
        </section>
    </div>
  )
}
