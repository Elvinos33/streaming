import Image from "next/image";

export default function Videocard() {
    return (
        <a href={""} className={"flex-col m-2 hover:bg-discordGrey-light rounded-lg h-fit p-2"}>
            <div className={"aspect-video flex justify-center items-center bg-discordGrey-dark rounded-lg"}>
                <img src={"https://cdn.wallpapersafari.com/15/4/b7xQKh.jpg"} className={"rounded-lg"}/>
            </div>
            <div className={"flex flex-row gap-2"}>
                <div className={"h-[32px] w-[38.4px] rounded-full mt-2 bg-discordGrey-dark "}></div>
                <div className={"flex flex-col w-full"}>
                    <p className={"text-slate-300"}>Video Title</p>
                    <div className={"flex flex-row justify-between"}>
                        <p className={"text-slate-300 text-opacity-60 text-[12px]"}>42 000 000 views</p>
                        <p className={"text-slate-300 text-opacity-60 text-[12px]"}>10h ago</p>
                    </div>
                </div>
            </div>
        </a>
    )
}