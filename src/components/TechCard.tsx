export const TechCard=({label}:{
    label: string
})=>{
    return <div className="bg-stone-900 text-white  border-zinc-900 dark:bg-zinc-100 dark:text-zinc-950 dark:border-zinc-50 font-sans italic text-xs border rounded-md w-fit p-1">
        {label}
    </div>
}