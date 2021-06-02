import StoryCard from "./StoryCard"

const stories = [
    {
        name : 'Virat Kohli',
        src : 'https://pbs.twimg.com/media/DCMCo4OXoAADlQZ.jpg',
        profilePic : 'https://pbs.twimg.com/profile_images/1308286636468219904/a61d79ts.jpg'
    },
    {
        name : 'ThalaPathy Vijay',
        src : 'https://live.staticflickr.com/945/27030917117_27312024d4_n.jpg',
        profilePic : 'https://www.filmibeat.com/img/2021/02/xvijay-1612258117.jpg.pagespeed.ic.dVHxMRznZ4.jpg'
    },
    {
        name : 'Messi',
        src : 'https://wallpapercave.com/wp/wp3652284.png',
        profilePic : 'https://wallpapercave.com/wp/wp3652316.jpg'
    },
    {
        name : 'Kriti shetty',
        src : 'https://wikinbio.com/wp-content/uploads/2020/12/Krithi-Shetty-biography.jpg',
        profilePic : 'https://wikinbio.com/wp-content/uploads/2020/12/Uppena-movie-heroine-Krithi-shetty-family-photos-9.jpg'
    },
    {
        name : 'Modi ji',
        src : 'https://upload.wikimedia.org/wikipedia/commons/c/c6/The_Prime_Minister%2C_Shri_Narendra_Modi_addressing_at_the_webinar_for_effective_implementation_of_Union_Budget_in_Defence_Sector_%28cropped%29.jpg',
        profilePic : 'https://resize.indiatvnews.com/en/resize/oldbucket/715_-/politicsnational/Modi-s-B-day-gi12571.jpg'
    },

]

function Stories() {
    return (
        <div className='flex jusify-center space-x-3 mx-auto'>
            {stories.map((story) => (
                <StoryCard key = {story.src} name = {story.name} src = {story.src} profile={story.profilePic}></StoryCard>
            ))}
        </div>
    )
}

export default Stories
