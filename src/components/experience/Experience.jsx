import React from 'react'
import img_experience from '../../assets/img_experience.png'

export default function Experience() {
  const experiences = [
    {
      year: 'May 2026 - Aug 2026',
      title: 'Frontend Developer Intern',
      company: 'QCerebrum Softwares',
      points: [
        'Spearheaded the frontend development of a comprehensive enterprise CRM dashboard, delivering scalable components for complex lead assignments.',
        'Engineered robust UI architectures including multi-step wizards, custom modals, and dynamic data tables using advanced React Hooks.',
        'Authored comprehensive unit tests using Jest and React Testing Library, achieving 100% test pass rates across mission-critical modules.',
        'Managed Git/GitHub version control, resolved complex merge conflicts, and opened PRs in an Agile environment.'
      ]
    },
    {
      year: '2025',
      title: 'College Project: Leave Request and Approval System',
      company: 'Academic Project',
      points: [
        'Developed a full-stack web app using React.js & MongoDB Atlas.',
        'Implemented student leave application & teacher approval workflows.',
        'Managed authentication and data storage efficiently.',
        'Deployed the project using Vercel/Render.'
      ]
    },
    {
      year: '2024',
      title: 'Web Development Intern – IBS (15-day Internship)',
      company: 'IBS',
      points: [
        'Completed a hands-on internship in web development.',
        'Gained experience with React.js, Tailwind CSS, and modern UI/UX design.',
        'Built interactive web pages and improved front-end performance.'
      ]
    }
  ];

  return (
    <section id='experience' className='relative overflow-hidden py-24'>
        {/* Glow Effects */}
        <div className='absolute top-[20%] left-[10%] w-96 h-96 bg-accentPurple/20 blur-[120px] rounded-full pointer-events-none'></div>
        <div className='absolute bottom-[10%] right-[10%] w-96 h-96 bg-accentTeal/20 blur-[120px] rounded-full pointer-events-none'></div>

        <div className='container mx-auto px-5 relative z-10'>
            <div className='text-center mb-16' data-aos='fade-up'>
                <h1 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-accentPurple mb-4'>Experience</h1>
                <p className='text-slate-400 text-lg'>My professional journey and academic projects</p>
            </div>

            <div className='max-w-4xl mx-auto'>
                <div className='relative border-l-2 border-slate-700/50 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none'>
                    
                    {/* Central line for desktop */}
                    <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accentBlue via-accentPurple to-transparent'></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`mb-12 flex flex-col md:flex-row justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`} data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
                            
                            {/* Desktop Timeline Dot */}
                            <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-darkBg border-2 border-accentTeal shadow-[0_0_10px_#00ffcc]'></div>
                            
                            {/* Mobile Timeline Dot */}
                            <div className='md:hidden absolute left-[-5px] mt-1.5 w-3 h-3 rounded-full bg-accentTeal shadow-[0_0_10px_#00ffcc]'></div>

                            <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                                <div className='bg-darkCard/80 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-accentPurple/50 transition-colors duration-300 shadow-xl group'>
                                    <div className='flex items-center gap-2 mb-2'>
                                        <span className='text-accentTeal font-semibold text-sm tracking-wider uppercase'>{exp.year}</span>
                                    </div>
                                    <h3 className='text-2xl font-bold text-white mb-1'>{exp.title}</h3>
                                    <h4 className='text-accentBlue mb-4 text-sm font-medium'>{exp.company}</h4>
                                    <ul className='space-y-2'>
                                        {exp.points.map((point, i) => (
                                            <li key={i} className='text-slate-400 text-sm leading-relaxed flex items-start gap-2'>
                                                <span className='text-accentPurple mt-1'>▹</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
