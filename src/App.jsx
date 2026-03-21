import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-muted text-sm tracking-widest uppercase font-display">
          © {new Date().getFullYear()} Ansh Khanpara • Built for the Silicon Age
        </p>
      </footer>
    </div>
  )
}

export default App
