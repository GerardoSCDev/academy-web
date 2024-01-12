'use client'
import { Card } from "react-bootstrap";

export default function Home() {


    const SideBar = () => {
        return (
            <div className="bg-red-400 h-full w-80 p-3">
                <div className="size-full bg-cyan-300"></div>
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