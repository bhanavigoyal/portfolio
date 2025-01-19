export const EduCard=({name, feild, year}:{
    name: string,
    feild: string,
    year: string
})=>{
    return <div className="w-full">
    <div className="border border-sm p-3 rounded-md flex ">
        <img src="/tiet_logo.png" className="rounded-full h-10 w-10 bg-slate-500"/>
        <div className="flex w-full justify-between">
            <div className="flex flex-col pl-5">
                <div className="text-sm font-bold">
                    {name}
                </div>
                <div className="text-xs pt-1 font-light text-zinc-500 dark:text-zinc-400">
                    {feild}
                </div>
            </div>
            <div className="text-xs font-light">
                {year}
            </div>
        </div>
        
    </div>

</div>
}