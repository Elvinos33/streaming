import Image from 'next/image'
import { Inter } from 'next/font/google'
import Videocard from "@/components/videocard";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import {useState} from "react";


const inter = Inter({ subsets: ['latin'] })



export default function Home() {

    const [showLogin, setShowLogin] = useState(false);

  return (
    <main className={`h-screen flex flex-col bg-discordGrey-dark overflow-hidden ${inter.className}`}>
        <div className={""}><Header showLogin={showLogin} setShowLogin={setShowLogin}/></div>
        <div className={"flex flex-row h-full p-2 pt-0"}>
            <div className={"text-white  text-center"}>
                <Sidebar/>
            </div>
            <div className={"scrollbar-hide flex-1 grid grid-cols-5 overflow-y-scroll rounded-lg bg-discordGrey-light h-full max-h-full pb-12 backdrop-blur bg-opacity-50 mt-0 m-6"}>
                <Videocard/>
            </div>
        </div>
    </main>
  )
}
