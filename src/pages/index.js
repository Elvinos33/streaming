import Image from 'next/image'
import { Inter } from 'next/font/google'
import Videocontainer from "@/components/videocontainer";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import {useState} from "react";
import Login from "@/components/login";
import CreateAccount from "@/components/createaccount";
import VideoUpload from "@/components/uploadvideo";



const inter = Inter({ subsets: ['latin'] })



export default function Home() {

    const [showLogin, setShowLogin] = useState(false);
    const [showCreateAccount, setShowCreateAccount] = useState(false);
    const [showVideoUpload, setShowVideoUpload] = useState(false)

  return (
    <main className={`h-screen flex flex-col bg-discordGrey-dark overflow-hidden ${inter.className}`}>

        <div className={""}>
            <Header setShowVideoUpload={setShowVideoUpload} setShowLogin={setShowLogin}/>
        </div>
        {showLogin && <Login setShowCreateAccount={setShowCreateAccount} setShowLogin={setShowLogin}/>}
        {showCreateAccount && <CreateAccount setShowLogin={setShowLogin} setShowCreateAccount={setShowCreateAccount}/>}
        {showVideoUpload && <VideoUpload setShowVideoUpload={setShowVideoUpload}/>}
        <div className={"flex flex-row h-full p-2 pt-0"}>
            <div className={"text-white  text-center"}>
                <Sidebar/>
            </div>
            <div className={"flex-1"}>
                <Videocontainer/>
            </div>
        </div>
    </main>
  )
}
