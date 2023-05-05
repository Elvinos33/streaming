import Videocard from "@/components/videocard";
import {db} from "@/lib/firebase";
import {collection, orderBy, onSnapshot, query} from "firebase/firestore"
import {useEffect, useState} from "react";




export default function Videocontainer() {

    const [videos, setVideos] = useState([""])
    const [videosAreLoading, setVideosAreLoading] = useState(true)

    useEffect(() => {
        const q = query(
            collection(db, "videos"),
            orderBy("createdAt", "asc")
        )
        return onSnapshot(q, (snapshot) => {
            const videoData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setVideos(videoData);
            setVideosAreLoading(false)

        });
    }, []);


    return (
        <div className={"scrollbar-hide flex-1 grid grid-cols-1 lg:grid-cols-4 overflow-y-scroll overflow-x- rounded-lg bg-discordGrey-light h-full pb-12 backdrop-blur bg-opacity-50 mt-0 m-6"}>
            {videosAreLoading ?
                <p className={" text-slate-300 p-4 flex-1"}>Loading...</p>
                :
                <>
                {videos.map((video) => {
                        console.log(videos)
                        return(
                            <Videocard vidURL={video.video} imageURL={video.thumbnail} key={video.id} sinceUpload={2} title={video.title} views={video.views}/>
                        )
                    } )}
                </>
            }
        </div>
    )
}