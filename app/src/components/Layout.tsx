import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: React.FC = () =>{
    return <div>
        <p>
            Ange Kano Ette 
        </p>
        <ul>
            <li><a href="/work">ANGE</a></li>
        </ul>
        <Outlet/>
    </div>
}