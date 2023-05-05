import {useForm} from "react-hook-form";
import {db} from "@/lib/firebase";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import UploadZone from "@/components/dropzone";
import {useState} from "react";

export default function VideoUpload({setShowVideoUpload}) {

    const {register, handleSubmit, reset} = useForm();
    const [videoDownloadURL, setVideoDownloadURL] = useState(null);
    const [thumbnailDownloadURL, setThumbnailDownloadURL] = useState(null);


    const handleVideoURLChange = (url) => {
        setVideoDownloadURL(url);
    };
    const handleThumbnailURLChange = (url) => {
        setThumbnailDownloadURL(url);
    };

    function handleCancelClick() {
        setShowVideoUpload(false)
        reset();
    }
    async function onSubmit(data) {
        console.log(data)

        if (videoDownloadURL === null || thumbnailDownloadURL === null) {
            alert("Please upload a video and thumbnail")
            return
        }
        // noinspection JSUnusedLocalSymbols
        const docRef = addDoc(collection(db, "videos"), {
            title: data.title,
            description: data.description,
            video: videoDownloadURL,
            views: 0,
            thumbnail: thumbnailDownloadURL,
            createdAt: serverTimestamp(),
        })
        reset();
        setShowVideoUpload(false)
    }

    function handleAwayClick() {
        console.log("clicked")
        setShowVideoUpload(false)
    }

    return (
        <div className={"absolute inset-0 z-40"}>
            <div onClick={handleAwayClick} className={"absolute inset-0"}></div>
            <div className={"z-50 absolute inset-12 rounded-lg shadow-strong bg-discordGrey-dark flex flex-row"}>
                <div className={"m-4 bg-discordGrey-std flex-1 rounded-lg flex justify-center items-center"}>
                    <UploadZone path={"/Videos/Videofiles/"} onDownloadURLChange={handleVideoURLChange}/>
                </div>
                <div className={"flex-1 flex flex-col items-center py-4"}>
                    <h1 className={"font-bold text-[1.5rem] text-blue-500"}>Upload a Video</h1>
                    <form action="" onSubmit={handleSubmit(onSubmit)} className={"flex flex-col justify-evenly h-full w-full py-4 px-20"}>
                        <input className={"p-2 rounded-lg"} placeholder={"Video Title..."} type="text" {...register("title", {required: true})}/>
                        <div className={"flex flex-col justify-center gap-1"}>
                            <span className={"text-slate-300 text-center"}>Thumbnail</span>
                            <div className={"bg-discordGrey-light h-20 rounded-lg flex justify-center items-center"}>
                                <UploadZone path={"/Videos/Thumbnails/"} onDownloadURLChange={handleThumbnailURLChange}/>
                            </div>
                        </div>

                        <textarea className={"p-2 h-52 rounded-lg resize-none"} placeholder={"Video Description..."} {...register("description", {required: true})} />
                        <div className={"flex justify-between"}>
                            <button onClick={handleCancelClick} type={"button"} className={"w-fit bg-slate-400 p-2 rounded-lg hover:bg-slate-300"}>Cancel</button>
                            <button className={" bg-blue-500 w-fit rounded-lg p-2 hover:bg-blue-400"}>Upload Video</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}