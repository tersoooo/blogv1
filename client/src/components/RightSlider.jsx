import React from 'react'

export default function SliderRight({ image, alt, text }) {
    return (
        <div
            className="flex flex-col gap-y-4 px-2 items-center justify-center hover:bg-[#151515] py-4 group min-h-[290px]">
            <img
                src={image}
                alt={alt}
                className="w-60 h-40 object-cover rounded group-hover:scale-110 transition-all"
            />
            <a href="#"
               className="block w-full text-lg text-center font-semibold text-white transition-colors duration-300 transform hover:text-gray-400 hover:underline"
               tabIndex="0" role="link">{text}</a>
        </div>
    )
}
