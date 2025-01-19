import { useLocation, useNavigate } from "react-router-dom"

export const Navlink=({label}:{
    label: string
})=>{
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = location.pathname === `/${label}` || (label === "home" && location.pathname === "/");

    return <button className={`group  font-thin transition duration-300 ${
        isActive? "text-slate-800 dark:text-slate-50": "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
    }`} onClick={()=>{
        if (label == "home"){
            navigate("/")
        }else{
            navigate(`/${label}`)
        }
    }}> 
        {label}
        <span className={`block  transition-all duration-500 h-0.5 bg-[#fac5a6] dark:bg-[#f09d5e] ${
            isActive?"max-w-full":"max-w-0 group-hover:max-w-full"
        }`}></span>
    </button>
}