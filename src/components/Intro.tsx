import { ContactLinks } from "./ContactLinks";

export const Intro=()=>{

    const handleOpen= ()=>{
        const pdfURL = "/resume.pdf";
        window.open(pdfURL, "_blank")
    }

    return <div className="flex flex-col justify-between">
        <div className="md:flex justify-between">
        <div className="md:order-2">
            <img src="/image.jpeg" className="md:w-44 w-28 md:mb-0 mb-4 rounded-md md:mt-8"></img>
        </div>     
        <div className="flex flex-col md:w-4/6 w-full md:order-1">
            <div className="text-4xl font-extrabold">
                Bhanavi Goyal
            </div>
            <div className="text-sm font-extralight pt-2 ">
                Web3 Developer | 📍India
            </div>
            <div className="py-3 text-sm">
                I like coding by day, reading books by night, and secretly hoping my next bug is solved in the next chapter.
            </div>
            <div className="flex pt-5">
                <div className="border rounded-md flex items-center space-x-2 p-1 pl-2 pr-2 hover:bg-[#fdedcd] hover:cursor-pointer mr-8 border-[#fad7ad] dark:border-[#f09d5e] dark:hover:bg-[#f09d5e] dark:hover:text-zinc-950" onClick={handleOpen}>
                    <div className="text-sm">
                        Resume
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                </div>
                <ContactLinks/>
            </div>
        </div>
        </div>
    </div>
}