import React, { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

export default function RegisterModal({ closeModal }) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        profilePicture: null,
    })

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if(name === 'profilePicture'){
            setFormData({...formData, profilePicture: files[0]});
        }else{
            setFormData({...formData, [name] : value});
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = formData;
        const payload = new FormData();
        payload.append("name", name);
        payload.append("email", email);
        payload.append("password", password);
        if(formData.profilePicture){
            payload.append("profileImage", formData.profilePicture);
        }
        try{
            await axios.post("http://localhost:5000/users/create", payload, {
                headers: {
                    "Content-Type" : "multipart/form-data",
                }
            })
            toast.success("Register Successfully!");
            setFormData({
                name: "",
                email: "",
                password: "",
                profilePicture: null,
            })
        }catch (err){
            toast.error(err.response?.data?.message || "Bir hata oluştu.", {
                position: "top-right",
            });
        }
    }

    return (
        <>
            <div
                className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
                aria-hidden="true"
            >
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow">
                        <div
                            className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Register this blog
                            </h3>
                            <button
                                onClick={closeModal}
                                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Your username
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="@blog"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Your password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="profilePicture"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Profile Picture
                                    </label>
                                    <input
                                        type="file"
                                        name="profilePicture"
                                        onChange={handleInputChange}
                                        id="profilePicture"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Register
                                </button>
                                <div className="text-sm font-medium text-gray-500">
                                    U have a account?{" "}
                                    <a
                                        href="#"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
