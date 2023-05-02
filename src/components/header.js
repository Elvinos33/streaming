import {AiOutlineSearch} from "react-icons/ai"

export default function Header({showLogin, setShowLogin}) {

    function handleLoginClick() {
        setShowLogin(!showLogin)
    }

    return (
        <div className={"w-full p-2 flex justify-between "}>
            <div className={"px-4 font-bold text-slate-300 flex justify-center items-center text-[1.5rem] transition hover:text-blue-500 hover:text-opacity-60"}>
                <a href={""}>Tube</a>
            </div>
            <div className={"flex justify-center items-center ml-4"}>
                <form action="" className={"flex"}>
                    <input className={"p-2 rounded-lg rounded-r-none bg-discordGrey-light text-slate-300 placeholder-discordGrey-dark w-[30rem]"} placeholder={"Search..."} type="text"/>
                    <button type={"submit"} className={"text-discordGrey-dark p-2 rounded-r-lg border-l border-discordGrey-dark bg-discordGrey-light flex justify-center items-center hover:bg-slate-300"}>
                        <AiOutlineSearch/>
                    </button>
                </form>
            </div>
            <div className={"pr-2 flex justify-center items-center"}>
                <button onClick={handleLoginClick} className={"bg-discordGrey-light p-2 px-4 rounded-lg text-blue-500 text-opacity-60 hover:text-opacity-100 hover:bg-slate-300"}>
                    Sign In
                </button>
            </div>

        </div>
    )
}