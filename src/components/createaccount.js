import {useForm} from "react-hook-form";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "@/lib/firebase";

export default function CreateAccount({setShowCreateAccount, setShowLogin}) {

    const {register, handleSubmit, reset} = useForm();

    function handleAwayClick() {
        setShowCreateAccount(false)
    }

    function handleLoginClick() {
        setShowLogin(true)
        setShowCreateAccount(false)
    }

    const onSubmit = async (data) => {
        try {

            if (data.password === data.confirm) {
                // noinspection JSUnusedLocalSymbols
                const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
                await updateProfile(auth.currentUser, {
                    displayName: data.displayName,
                    // Signed in

                })


                reset();
                setShowRegister(false)
                setShowLogin(true)
            } else {
                alert("Passwords do not match")
            }

            // ...
        } catch (error) {
            console.log(error)
            // ...
        }
    };

    return (
        <div className="absolute inset-0 z-40 flex justify-center items-center">
            <div className={"absolute inset-0"}  onClick={handleAwayClick}></div>
            <div className=" flex flex-col z-50 bg-discordGrey-darker p-4 rounded-lg gap-4">
                <h1 className="text-center text-slate-300 text-[20px]">Create Account</h1>
                <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col gap-6">
                    <input className={"p-2 rounded-lg"} type="text" placeholder={"Username..."} {...register("displayName", {required: true})} />
                    <input className={"p-2 rounded-lg"} type="email" placeholder={"Email..."} {...register("email", {required: true})} />
                    <input className={"p-2 rounded-lg"} type="password" placeholder={"Password..."} {...register("password", {required: true})} />
                    <input className={"p-2 rounded-lg"} type="password" placeholder={"Confirm Password..."} {...register("confirm", {required: true}
                    )} />
                    <button className="bg-discordGrey-std text-slate-300 p-4 rounded-lg hover:bg-slate-300 hover:text-black">Create Account</button>
                </form>
                <div className={"flex justify-center flex-col items-center"}>
                    <p className={"text-center text-slate-300 text-opacity-60"}>Already have an account?</p>
                    <button onClick={handleLoginClick} className={"text-center text-blue-500 w-fit h-fit text-opacity-40 hover:text-opacity-100"}>Sign In</button>
                </div>
            </div>
        </div>
    )
}