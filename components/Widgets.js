import Contact from "./Contact"

const { DotsHorizontalIcon, VideoCameraIcon, SearchIcon } = require("@heroicons/react/outline")

const contacts = [
    {src: 'https://pbs.twimg.com/media/DCMCo4OXoAADlQZ.jpg' , name :'Virat Kohli'},
    {src: 'https://www.filmibeat.com/img/2021/02/xvijay-1612258117.jpg.pagespeed.ic.dVHxMRznZ4.jpg' , name :'Vijay'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/The_Prime_Minister%2C_Shri_Narendra_Modi_addressing_at_the_webinar_for_effective_implementation_of_Union_Budget_in_Defence_Sector_%28cropped%29.jpg' , name :'Modi ji'},
    {src: 'https://wallpapercave.com/wp/wp3652284.png' , name :'Messi'},
    {src: 'https://wikinbio.com/wp-content/uploads/2020/12/Uppena-movie-heroine-Krithi-shetty-family-photos-9.jpg' , name :'Kriti shetty'}
]

function Widgets() {
    return (
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex justify-between items-center text-gray-500 mb-5'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6'></VideoCameraIcon>
                    <SearchIcon className='h-6'></SearchIcon>
                    <DotsHorizontalIcon className='h-6' ></DotsHorizontalIcon>
                </div>
            </div>
            {contacts.map((contact) => (
                <Contact 
                key = {contact.src} src = {contact.src} name = {contact.name}
                ></Contact>
            ))}
        </div>
    )
}

export default Widgets
