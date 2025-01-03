import React from 'react'

export default function RightCard({ image, text, alt }) {
    return (
        <div
            className="flex gap-x-4 px-2 items-center justify-center hover:bg-[#151515] py-4 group border-b border-b-border-color">
            <img
                src={image}
                alt={alt}
                className="min-w-24 h-20 object-cover rounded group-hover:scale-110 transition-all"
            />
            <a href="#"
               className="block w-full text-lg font-semibold text-white transition-colors duration-300 transform hover:text-gray-400 hover:underline"
               tabIndex="0" role="link">{text}</a>
        </div>
    )
}
