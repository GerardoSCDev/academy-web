'use client'
import { useState } from "react";
import { Button, Card, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import Image from 'next/image'
import {
    faCaretRight,
    faGraduationCap,
    faChalkboardTeacher,
    IconDefinition,
 } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {

    const sideNavOptions: NavBarOption[] = [
        { title: 'Doscentes', icon: faChalkboardTeacher},
        { title: 'Alumnos', icon: faGraduationCap },
    ]

    const SideBarAvatar = () => {
        return (
            
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-700 flex justify-center items-center border-4 border-blue-600 ring-4 ring-blue-500">
                    <span className="text-4xl text-white ">
                        JL
                    </span>
                </div>
                <div className="flex flex-col items-center mt-3 text-center text-white">
                    <label>Adminitrador</label>
                    <label>Horacio Hernandez Pawer Ranger</label>
                </div>
            </div>
            
        )
    }

    const SideBarButtonOptionIcon = ({icon}: NavBarOption) => {
        console.log(icon)
        if (icon !== undefined) {
            return <FontAwesomeIcon icon={icon}/>
        }
        return <></>
    }

    const SideBarButtonOption = ({title = '', icon}: NavBarOption) => {
        return (
            <Button onClick={() => {console.log(title)}} style={{backgroundColor: 'white', height: 45, color: 'black', textAlign: 'left', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>

                <label className="size-8 flex items-center pt-0.5">
                    <SideBarButtonOptionIcon icon={icon}/>
                </label>
                
                <label className="pr-3 w-full">{title}</label>
                
                <label className="size-8flex items-center">
                    <FontAwesomeIcon icon={faCaretRight}/>
                </label>
                
            </Button>
        )
    }

    const SideBar = () => {
        return (
            <div className="w-80 p-3 rounded-xl">
                <div className="size-full bg-gradient-to-t from-blue-700 via-blue-900 to-blue-700 rounded-xl shadow-xl flex flex-col">
                    
                    <div className="h-72 w-full  flex justify-center items-center">
                        <SideBarAvatar/>
                    </div>

                    <div className="h-full w-full flex flex-col p-3 gap-2 overflow-auto">
                        {
                            sideNavOptions.map((navOption) => <SideBarButtonOption title={navOption.title} icon={navOption.icon}/>)
                        }
                    </div>
                    <div className="h-28 w-full text-white flex flex-col text-center">
                        Version 3.10.2
                    </div>
                    
                </div>
            </div>
        )
    }

    const Dashboard = () => {
        return (
            <div className="flex flex-col bg-red-500 h-full w-full p-3">
                <div className="h-28 w-full bg-purple-400" ></div>
                <div className="size-full bg-green-400"> hola</div>
            </div>
        )
    }


    return (
        <div className='h-full flex justify-center items-center bg-slate-900'>
            <Card 
                style={{height: '90dvh'}}
                className='flex flex-row max-sm:w-full max-sm:m-5 sm:w-11/12'>

                <SideBar />
                <Dashboard />

            </Card>
        </div>
    )
}



interface NavBarOption {
    title?: string
    path?: string
    icon?: IconDefinition 
}