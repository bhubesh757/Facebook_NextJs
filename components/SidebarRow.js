import Image from "next/image"

function SidebarRow({Icon , src , title}) {
    return (
        <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 cursor-pointer rounded-xl'>
            {src && (
                <Image
                 className='rounded-full'
                 src = {src}
                 width={30}
                 height={30}
                 layout='fixed'
                >
                </Image>   
            )}

            {Icon && (
                <Icon className='h-8 w-8 text-blue-500'></Icon>
            )}
            <p className='hidden sm:inline-flex font-bold'>{title}</p>
        </div>
    )
}

export default SidebarRow
