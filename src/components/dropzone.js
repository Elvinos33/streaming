import {useCallback, useState} from "react";
import {useDropzone} from "react-dropzone";
import {storage} from "@/lib/firebase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";

export default function UploadZone({onDownloadURLChange, path}) {


    const [fileName, setFileName] = useState(null);

    const handleFileUpload = async (file) => {
        // Create a reference to the file in Firebase Storage
        const storageRef = ref(storage, path + file.name);

        try {
            await uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });

            // Get the download URL of the uploaded file
            const downloadURL = await getDownloadURL(storageRef);
            console.log("File available at", downloadURL);

            onDownloadURLChange(downloadURL);
            setFileName(file.name)

            // Do something with the download URL, e.g., save it to the user's profile
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const onDrop = useCallback(async (acceptedFiles) => {
            acceptedFiles.forEach((file) => {
                handleFileUpload(file);
            });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div
            {...getRootProps()}
            className={"text-slate-300 w-full h-full flex justify-center items-center flex-col text-opacity-60 rounded-lg"}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop Files Here</p>
            ) : (
                <>
                    <p>Drop or select file here...</p>
                    {fileName && <span className={"text-[1.5rem]"}>Selected file: {fileName}</span>}
                </>

            )}
        </div>
    )
}
