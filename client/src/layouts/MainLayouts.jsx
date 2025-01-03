import React from 'react'
import Sidebar from "../components/Sidebar.jsx";
import RightSide from "../components/RightSide.jsx";
import {Outlet} from "react-router-dom";

export default function MainLayouts() {
    return (
        <div className="grid grid-cols-[300px_1fr_300px]">
           <div>
               <Sidebar />
           </div>
            <div>
                <div>{<Outlet/>}</div>
            </div>
            <div>
                <RightSide/>
            </div>
        </div>
    )
}
