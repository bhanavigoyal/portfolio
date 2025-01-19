

export const ContactForm=()=>{

    return <div>
        <div className="text-2xl font-bold">
            Contact
        </div>
        <form action="https://formspree.io/f/xlddydko" method="POST">
            <div className="flex flex-col space-y-10 pt-8">
                <div className="flex justify-between space-x-3">
                    <input className="border rounded-md p-2 w-full focus:border-[#fad7ad] dark:focus:border-[#f09d5e] outline-none dark:bg-[#0A0A0A] dark:text-slate-50" placeholder="Name" name="Name" required/>   
                    <input className="border rounded-md p-2 w-full outline-none focus:border-[#fad7ad] dark:focus:border-[#f09d5e] dark:bg-[#0A0A0A] dark:text-slate-50" placeholder="Email" name="Email" required/>
                </div>
                <textarea className="border p-2 rounded-md h-28 focus:border-[#fad7ad] outline-none dark:focus:border-[#f09d5e] dark:bg-[#0A0A0A] dark:text-slate-50" placeholder="Drop me a text!" name="Message" required/>
            </div>
            <div className="pt-8">
                <button className="w-full p-2 border hover:bg-[#fdedcd] border-[#fad7ad] focus:bg-[#fee4b0] dark:border-[#f09d5e] dark:hover:bg-[#f09d5e] dark:focus:bg-[#f67e47] dark:hover:text-zinc-950 dark:focus:text-zinc-950 rounded-md">Send Message</button>
            </div>
        </form>
    </div>
}