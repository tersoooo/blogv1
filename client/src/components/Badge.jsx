import React from 'react'

export default function Badge({ children }) {
    return (
        <div
            className="bg-indigo-800 rounded-full px-2.5 py-0.5"
        >
            <span
                className=
                    "text-indigo-200 text-sm font-bold"
            >
            {children}
        </span>
        </div>
    )
}
