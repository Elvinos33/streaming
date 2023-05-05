import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "@/lib/firebase";
import {useForm} from "react-hook-form";

export default function Login({setShowLogin, setShowCreateAccount}) {

    const {register, handleSubmit, reset} = useForm();

    function onSubmit(data) {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // User logged in successfully
                const user = userCredential.user;
                console.log('User logged in successfully:', user);
                reset();
            })
            .catch((error) => {
                // Handle login errors
                console.log(error)
            });
    }


    function handleAwayClick() {
        setShowLogin(false)
    }

    function handleCreateAccountClick() {
        setShowCreateAccount(true)
        setShowLogin(false)
    }

    return (
        <div className="absolute inset-0 z-40 flex justify-center items-center">
            <div className={"absolute inset-0"}  onClick={handleAwayClick}></div>
            <div className=" flex flex-col z-50 bg-discordGrey-darker p-4 rounded-lg gap-4">
                <h1 className="text-center text-slate-300 text-[20px]">Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                    <input className={"p-2 rounded-lg"} type="text" placeholder={"Email..."} {...register("email", {required: true})} />
                    <input className={"p-2 rounded-lg"} type="password" placeholder={"Password..."} {...register("password", {required: true})} />
                    <button className="bg-discordGrey-std text-slate-300 p-4 rounded-lg hover:bg-slate-300 hover:text-black">Sign In</button>
                </form>
                <div className={"flex justify-center flex-col items-center"}>
                    <p className={"text-center text-slate-300 text-opacity-60"}>Don't have an account?</p>
                    <button onClick={handleCreateAccountClick} className={"text-center text-blue-500 w-fit h-fit text-opacity-40 hover:text-opacity-100"}>Create Account</button>
                </div>
            </div>
        </div>
    );
}
