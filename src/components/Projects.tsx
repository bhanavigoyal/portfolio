import { ProjectCard } from "./ProjectCard"

export const Projects=()=>{
    return <div>
        <div className="text-2xl font-bold pb-4">
         Projects
        </div>
        {/* add mapping from main dataset */}
        <div className="md:grid grid-cols-2 gap-x-4 gap-y-4 flex flex-col py-4">
            <ProjectCard label="Web3 Saas" description="A website for youtubers to increase there click rate" techLabels={["next.js", "express"]}/>
            <ProjectCard label="Wallet" description="web-based HD wallet platform on the Solana blockchain that allows users to generate and
manage multiple wallets from a single private key." techLabels={["next.js", "express"]}/>
            <ProjectCard label="Web3 DCEX" description="cryptocurrency exchange platform that simplifies the trading process
for users by allowing them to sign in with their Google Accounts." techLabels={["next.js", "express"]}/>
            <ProjectCard label="Token Launchpad" description="" techLabels={["next.js", "express"]}/>
        </div>
    </div>
}