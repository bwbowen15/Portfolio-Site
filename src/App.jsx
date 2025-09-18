import './App.css';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);


//components
import Header from './Components/Header/Header'
import Picture from './Components/Picture/Picture'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'




function App() {

  

  return (
    <>
    
    <Header></Header>
    <Picture></Picture>
    <Intro></Intro>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Footer></Footer>
    </>
  )
}

export default App