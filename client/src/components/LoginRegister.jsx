import React, {useState} from 'react'
import RegisterModal from './RegisterModal.jsx';

export default function LoginRegister() {

    const [modal, setModal] = useState(false);
    const closeModal = () => setModal(false);

    return (
        <>
            <div className="flex justify-between px-10 py-8 border-b border-b-border-color">
                <button type="button"
                        onClick={() => setModal(true)}
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 active:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-indigo-500 dark:hover:border-indigo-800 dark:focus:text-blue-500 dark:focus:border-blue-600 dark:active:text-blue-500 dark:active:border-blue-600">
                    Register
                </button>
                <div className="flex items-center justify-center">
                    <p className="text-lg text-indigo-500">/</p>
                </div>
                <button type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 active:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-indigo-500 dark:hover:border-indigo-800 dark:focus:text-blue-500 dark:focus:border-blue-600 dark:active:text-blue-500 dark:active:border-blue-600">
                    Log in
                </button>
            </div>
            {modal && (
                <RegisterModal closeModal={closeModal} />
            )}
        </>
    )
}
