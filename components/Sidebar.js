import { CalendarIcon, ChevronDownIcon, ClockIcon, DesktopComputerIcon, ShoppingCartIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/client"
import SidebarRow from "./SidebarRow";

function Sidebar() {

    const [session , loading] = useSession();


    return (
        <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
             <SidebarRow src = {session.user.image} title = {session.user.name}></SidebarRow>
            <SidebarRow Icon = {UsersIcon} title = 'Friends'></SidebarRow>
            <SidebarRow Icon = {UserGroupIcon} title = 'Groups'></SidebarRow>
            <SidebarRow Icon = {ShoppingCartIcon} title = 'MarketPlace'></SidebarRow>
            <SidebarRow Icon = {DesktopComputerIcon} title = 'Watch'></SidebarRow>
            <SidebarRow Icon = {CalendarIcon}title = 'Events'></SidebarRow>
            <SidebarRow Icon = {ClockIcon}title='Memories'></SidebarRow>
            <SidebarRow Icon = {ChevronDownIcon}title='See More'></SidebarRow>
        </div>
    )
}

export default Sidebar
