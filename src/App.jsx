import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Language from './components/language/Language';
import Projects from './components/projects/Projects';
import Achievements from './components/achievements/Achievements';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
   <main className='bg-darkBg min-h-screen text-slate-300'>
    <Hero /> 
    <Skills />
    <Experience />
    <Language />
    <Projects />
    <Achievements />
    <Contact />
    <Footer />
   </main>
  )
}

