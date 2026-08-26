import React from 'react'

export default function Achievements() {
    const achievements = [
        { title: 'React JS Certification', issuer: 'Infosys Springboard' },
        { title: 'Azure DevOps Certification', issuer: 'Coursera' },
        { title: 'Runner-Up', issuer: 'Line Following Robot Competition, IIT Palakkad' },
        { title: 'Finalist', issuer: 'Technical Competition, Sona College of Engineering and Technology' },
        { title: 'Participant', issuer: 'AI in Fashion Design Process, National Conference at PSG College of Technology' },
    ];

    return (
        <section id="achievements" data-aos="fade-up" data-aos-delay="400" className="relative overflow-hidden flex flex-col text-white body-font py-24">
            <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-accentTeal/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="container px-5 mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-accentTeal to-accentBlue">Achievements & Certifications</h2>
                
                <div className="flex flex-col items-center max-w-3xl mx-auto gap-4">
                    {achievements.map((item, index) => (
                        <div key={index} className="w-full bg-darkCard/80 backdrop-blur-md border border-slate-700/50 hover:border-accentTeal/50 transition-colors shadow-lg rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center group">
                            <div className="flex items-start gap-4">
                                <span className="text-accentTeal mt-1">▹</span>
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-accentTeal transition-colors">{item.title}</h3>
                                    <p className="text-slate-400 mt-1">{item.issuer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
