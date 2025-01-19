
import { Navlink } from "./Navlink"
import { Toggle } from "./Toggle"

export const Navbar=()=>{

    return <div className="flex w-full justify-between py-10 dark:bg-[#0a0a0aa7] bg-[#ffffffeb]">
        <div className="flex space-x-7 ">
            <Navlink label={"home"}/>
            <Navlink label={"projects"}/>
            {/* <Navlink label={"about"}/> */}
            <Navlink label={"contact"}/>
        </div>
        <div className="mr-2">
            <Toggle/>
        </div>
    </div>
}