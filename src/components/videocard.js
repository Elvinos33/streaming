import Image from "next/image";

export default function Videocard({title, views, sinceUpload, imageURL, vidURL}) {
    return (
        <a href={vidURL} className={"flex-col m-2 hover:bg-discordGrey-light rounded-lg h-fit p-2"}>
            <div className={"aspect-video flex justify-center items-center bg-discordGrey-dark rounded-lg"}>
                <img src={imageURL} className={"rounded-lg aspect-video object-contain bg-black"}/>
            </div>
            <div className={"flex flex-row gap-2 mt-2"}>
                <div className={"h-[32px] w-[38.4px] rounded-full mt-2 bg-discordGrey-dark "}></div>
                <div className={"flex flex-col w-full"}>
                    <p className={"text-slate-300"}>{title}</p>
                    <div className={"flex flex-row justify-between"}>
                        <p className={"text-slate-300 text-opacity-60 text-[12px]"}>{views} views</p>
                        <p className={"text-slate-300 text-opacity-60 text-[12px]"}>{sinceUpload}h ago</p>
                    </div>
                </div>
            </div>
        </a>
    )
}