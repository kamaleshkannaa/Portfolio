import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../../assets/image.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/ex.png';
import image5 from '../../assets/image5.png';
import crmImage from '../../assets/crmImage.png'

export default function Projects() {
    const listProjects = [
        { 
            id: 0, 
            image: crmImage, 
            title: 'Enterprise CRM Dashboard (QCerebrum)', 
            description: 'Frontend Developer Intern. Spearheaded the frontend development of a comprehensive enterprise CRM dashboard using React.js and Vite. Engineered robust UI architectures, multi-step wizards, and dynamic data tables. Authored comprehensive unit tests using Jest and React Testing Library, achieving 100% test pass rates across mission-critical modules.',
            githubLink: 'https://github.com/qcerebrumsoft/crm_front_end', 
            hostLink: '#',
            isInternship: true // This triggers the special badge
        },
        { 
            id: 1, 
            image: image, 
            title: 'BIT CAMPS (Leave Request & Approval System)', 
            description: 'Architected a secure, full-stack leave management portal allowing users to submit requests and administrators to review/approve them in real time. Implemented instant notification systems and state-driven dashboards to ensure process transparency and reduce administrative overhead.',
            githubLink: 'https://github.com/kamaleshkannaa/Leave_management', 
            hostLink: 'https://yourproject.vercel.app' 
        },
        { 
            id: 2, 
            image: image2, 
            title: 'BRAINWAVE (Modern UI/UX Showcase)', 
            description: 'Developed a high-performance, visually stunning landing page exemplifying modern UI/UX principles. Leveraged complex CSS animations and responsive design techniques to establish a sleek user experience, serving as an architectural blueprint for future deployments.',
            githubLink: 'https://github.com/kamaleshkannaa/Brainwave', 
            hostLink: 'https://brainwave-kamaleshkannaas-projects.vercel.app/' 
        },
        { 
            id: 3, 
            image: image3, 
            title: 'STUDENT RESULT MANAGEMENT SYSTEM', 
            description: 'Collaborated with a 3-member team to design and deploy an academic performance tracking system. Engineered data visualization interfaces and optimized data-retrieval workflows, significantly reducing processing time for administrative records.',
            githubLink: 'https://github.com/kamaleshkannaa', 
            hostLink: '#' 
        },
        { 
            id: 4, 
            image: image4, 
            title: 'Country Explorer', 
            description: 'A modern, full-stack web application that lets you explore countries around the world using the REST Countries API.',
            githubLink: 'https://github.com/kamaleshkannaa/Country_Explore', 
            hostLink: 'https://country-explore-ten.vercel.app/' 
        },
        { 
            id: 5, 
            image: image5, 
            title: 'Enterprise Decision Platform', 
            description: 'A comprehensive rule engine platform for defining, managing, and executing business rules dynamically across applications.',
            githubLink: 'https://github.com/kamaleshkannaa/Enterprise_Policy_Rule_Engine', 
            hostLink: '#' 
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2, // Show only two projects at a time
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section data-aos="fade-up" data-aos-delay="400" id="projects" className="relative overflow-hidden flex flex-col text-white body-font">
            <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-accentBlue/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="container px-5 py-24 mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-accentTeal">Experience & Projects</h2>
                <Slider {...settings}>  
                    {listProjects.map((project) => (
                        <div key={project.id} className="p-4">
                            <div className="h-[430px] w-full bg-darkCard/80 backdrop-blur-md border border-slate-700/50 hover:border-accentBlue/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden flex flex-col group relative">
                                
                                {/* Special Badge for Internships */}
                                {project.isInternship && (
                                    <div className="absolute top-4 left-4 z-20 bg-accentBlue text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm bg-opacity-90">
                                        ✨ Internship Experience
                                    </div>
                                )}

                                <div className="overflow-hidden h-[200px] w-full relative">
                                    {/* Gradient overlay to make text pop if image is bright */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-darkCard/90 to-transparent z-10"></div>
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                                </div>
                                
                                <div className="p-5 flex flex-col flex-grow relative z-20 -mt-8">
                                    <h2 className="tracking-widest text-xl title-font font-bold text-white mb-2 line-clamp-1">{project.title}</h2>
                                    <div className="overflow-y-auto max-h-[110px] pr-2 custom-scrollbar">
                                        <p className="leading-relaxed text-sm text-slate-300">{project.description}</p>
                                    </div>
                                    <div className="mt-auto pt-4 flex justify-between items-center border-t border-slate-700/50">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accentTeal font-medium transition-colors flex items-center gap-2 text-sm">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                            GitHub
                                        </a>
                                        {project.hostLink !== '#' && (
                                            <a href={project.hostLink} target="_blank" rel="noopener noreferrer" className="bg-accentBlue/20 text-accentBlue hover:bg-accentBlue hover:text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1">
                                                Live Demo
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>                                        
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}