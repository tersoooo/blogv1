import React from 'react'
import RightCard from "./RightCard.jsx";
import LoginRegister from "./LoginRegister.jsx";

export default function Happening() {
    return (
        <>
            <LoginRegister />
            <div className="flex flex-col">
                <div className="block px-5 py-4 text-center">
                    <h3 className="text-2xl font-semibold">
                        What’s happening?
                    </h3>
                </div>
                <RightCard
                    alt="image alt"
                    image="https://images.unsplash.com/photo-1710948651901-e61d9e9934f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
                    text="Subscribe to unlock new features and if eligible, receive"
                />
                <RightCard
                    alt="image alt"
                    image="https://images.unsplash.com/photo-1698084204586-905685f3b21a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
                    text="Subscribe to unlock new features and if eligible, receive"
                />
                <RightCard
                    alt="image alt"
                    image="https://images.unsplash.com/photo-1698084204586-905685f3b21a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
                    text="Subscribe to unlock new features and if eligible, receive"
                />
            </div>
        </>
    )
}
