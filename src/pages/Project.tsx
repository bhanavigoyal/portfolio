import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Projects } from "../components/Projects"

export const Project=()=>{
    return <div className="flex flex-col items-center font-mono pb-20 mx-6">
            <div className="lg:w-3/6 md:w-5/6">
              <div className="sticky top-0 z-50">
                <Navbar/>
              </div>
              <div>
                <Projects/>
              </div>
              <div className="pt-6">
                <Footer/>
              </div>
          </div>
        </div>
}