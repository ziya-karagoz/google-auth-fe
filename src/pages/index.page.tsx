import React, { useEffect } from "react";
import { signinWithGoogle } from "../lib/configs/firebase-config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    async function handleSignIn(): Promise<void> {
        try {
            // this function is the one when client open the google signin popup
            const userCredentials = await signinWithGoogle();
            const accessToken = await userCredentials.user.getIdToken();
            console.log(accessToken);

            axios
                .get("http://localhost:3000/auth/login", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                .then((res: any) => {
                    console.log(res);
                    localStorage.setItem("user", JSON.stringify(res.data.body));
                    navigate("/dashboard");
                });
        } catch (error: any) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (localStorage.getItem("user")) {
            navigate("/dashboard");
        }
    }, []);

    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <div>
                <div className="px-6 sm:px-0 max-w-sm">
                    <button
                        onClick={() => {
                            void handleSignIn();
                        }}
                        type="button"
                        className="text-[#080808] w-full border border-[#f4f5f0]  bg-white hover:bg-[#F4F5F0]/90 focus:ring-4 focus:outline-none focus:ring-[#F4F5F0]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#F4F5F0]/55 mr-2 mb-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107" />
                            <path d="M3.15332 7.3455L6.43882 9.755C7.32782 7.554 9.48082 6 12.0003 6C13.5298 6 14.9213 6.577 15.9808 7.5195L18.8093 4.691C17.0233 3.0265 14.6343 2 12.0003 2C8.15932 2 4.82832 4.1685 3.15332 7.3455Z" fill="#FF3D00" />
                            <path d="M12.0002 22.0001C14.5832 22.0001 16.9302 21.0116 18.7047 19.4041L15.6097 16.7851C14.6057 17.5456 13.3577 18.0001 12.0002 18.0001C9.39916 18.0001 7.19066 16.3416 6.35866 14.0271L3.09766 16.5396C4.75266 19.7781 8.11366 22.0001 12.0002 22.0001Z" fill="#4CAF50" />
                            <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2555 15.1185 16.536 16.083 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2" />
                        </svg>
                        Sign In With Google<div></div>
                    </button>
                </div>
                <div className="px-6 sm:px-0 max-w-sm">
                    <button
                        onClick={() => {
                            void handleSignIn();
                        }}
                        type="button"
                        className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-facebook"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        Sign In With Facebook<div></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
