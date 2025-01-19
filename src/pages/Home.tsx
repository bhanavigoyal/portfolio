import { useNavigate } from "react-router-dom"
import { Education } from "../components/Education"
import { Footer } from "../components/Footer"
import { Intro } from "../components/Intro"
import { Navbar } from "../components/Navbar"
import { Projects } from "../components/Projects"
import { ContactForm } from "../components/ContactForm"


export const Home=()=>{
    const navigate = useNavigate()
    return <div className="flex flex-col items-center font-mono pb-20 mx-6">
    <div className="lg:w-3/6 md:w-5/6">
      <div className="sticky top-0 z-50">
        <Navbar/>
      </div>
      <div className="py-5">  
        <Intro/> 
      </div>
      <div className="pt-2">
        <Projects/>
        <div className="flex justify-center">
            <div className="flex w-fit items-center space-x-2 justify-center p-3 hover:cursor-pointer" onClick={()=>{
                navigate("/projects")
            }}>
                <div>
                    see more
                </div>
                <svg className="h-4 w-4 text-stone-900 dark:text-slate-50"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
    </svg>

            </div>
        </div>
      </div>
      <div className="pb-4">
        <Education/>
      </div>
      <div className="pt-4 pb-4">
        <ContactForm/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  </div>
}