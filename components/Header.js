import Image from "next/image";
// Heroicons

import {BellIcon , ChatIcon , 
        ChevronDownIcon , HomeIcon , UserGroupIcon , ViewGridIcon
} from "@heroicons/react/solid"

import {FlagIcon , PlayIcon , SearchIcon , ShoppingCartIcon} from "@heroicons/react/outline"
import HeaderIcon from "./HeaderIcon";
import {  signOut, useSession } from "next-auth/client";

function Header() {

    // using the UseState
    const [session] = useSession();

    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
            {/* header left  */}
            <div className='flex items-center'>
                <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'
                width={40} 
                height={40} 
                layout = 'fixed'></Image>

                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2 '>
                    <SearchIcon className='h-6 text-gray-600'></SearchIcon>
                    <input className=" hidden md:inline-flex ml-2 flex m-2 items-center bg-transparent outine-none  placeholder-gray-500 flex-shrink" type = 'text' placeholder = 'Search Facebook'></input>
                </div>
            </div>
            {/* header center  */}
            <div className='flex  justify-center flex-grow '>
                <div className='flex space-x-6 md:space-x-2 '>
                    <HeaderIcon active Icon = {HomeIcon}></HeaderIcon>
                    <HeaderIcon Icon = {FlagIcon}></HeaderIcon>
                    <HeaderIcon Icon = {PlayIcon}></HeaderIcon>
                    <HeaderIcon Icon = {ShoppingCartIcon}></HeaderIcon>
                    <HeaderIcon Icon = {UserGroupIcon}></HeaderIcon>
                </div>
            </div>
            {/* header right */}
            <div className='flex items-center sm:space-x-2 justify-end'>
                {/* profile pic */}
                <Image className ='rounded-full cursor-pointer'  height="40" width="40"
                src={session.user.image}
                onClick={signOut} 
                >

                </Image>
                {/* username */}
                <p className='whitespace-nowrap font-semibold pr-3 '> 
                    {session.user.name}
                </p>
                <ViewGridIcon className='icon '></ViewGridIcon>
                <BellIcon className='icon'></BellIcon>
                <ChatIcon className='icon'></ChatIcon>
                <ChevronDownIcon className='icon'></ChevronDownIcon>

            </div>
        </div>
    )
}

export default Header
