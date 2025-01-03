import React from 'react'
import Happening from "./Happening.jsx";
import RightSlider from "./Slider.jsx";

export default function RightSide() {
    return (
        <div className="h-screen border-b border-b-border-color rounded border-l border-l-border-color">
            <Happening />
            <RightSlider />
        </div>
    )
}
