import { useMotionTemplate, useMotionValue, motion } from "framer-motion"
import { Logo } from "./Logo"
import { TechCard } from "./TechCard"

export const ProjectCard=({label, description, techLabels}:{
    label: string,
    description: string,
    techLabels: string[]
})=>{

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function onMouseMove({currentTarget, clientX, clientY}:React.MouseEvent<HTMLDivElement>){
        let {left , top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return <div onMouseMove={onMouseMove} className="hover:cursor-pointer group relative border h-72 rounded-lg select-none hover:shadow-lg hover:transition-shadow hover:ease-in dark:shadow-slate-800">
        <Effect mouseX ={mouseX} mouseY = {mouseY}/>
        <div className="relative z-10">
            <div className="p-4">
                <Logo label={label}/>
            </div>
            <div className="font-sans font-semibold pl-4 pr-4 text-xl">
                {label}
            </div>
            <div className="text-base font-sans p-4 font-thin">
                {description}
            </div>
            <div className="pl-4 flex space-x-2">
                {techLabels.map(label=> <TechCard label={label}/>)}
            </div>
        </div>
    </div>

    function Effect({mouseX, mouseY}:any){
        let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
        let style = { maskImage, WebkitMaskImage: maskImage };

        return <div className="pointer-events-none">
            <motion.div
        className="absolute inset-0 rounded-md bg-gradient-to-r from-[#fac5a6] to-[#fcf6cf] dark:from-[#f78a0579] dark:to-[#fdde4361] opacity-0 transition duration-300 group-hover:opacity-100 "
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      ></motion.div>
        </div>
    }
}