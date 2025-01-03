import React from 'react'
import Card from "../components/Card.jsx";
import Badge from "../components/Badge.jsx";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-10">
            <div className="mr-20 flex justify-end mt-10">
                <Badge>TOP 5</Badge>
            </div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <div className="mr-20 flex justify-end">
                <Badge>NEWS</Badge>
            </div>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
