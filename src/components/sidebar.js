export default function Sidebar() {
    return (
        <div className={"w-60 bg-discordGrey-std rounded-lg h-full pb-16 overflow-y-scroll "}>
            <p className={" p-2 font-bold"}>Subscriptions</p>
            <a href={""} className={"p-2 rounded-lg bg-discordGrey-light text-slate-300 m-2 flex flex-row gap-5 items-center hover:bg-slate-300 hover:text-black"}>
                <div className={"w-8 h-8 bg-discordGrey-dark rounded-full"}></div>
                <p className={""}>User</p>
            </a>
        </div>
    )
}