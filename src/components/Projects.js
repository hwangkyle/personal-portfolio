import '../css/Projects.css';
import Title from './Title';
import Cards from './Cards';

export default function Projects() {
    const cardsData = [
        {
            title:"Timed Web Blocker",
            description:"A Chrome Extension where the user specifies websites and a length of time, and the extension will block them after their respective times.",
            link:"https://chrome.google.com/webstore/detail/timed-web-blocker/oapiednjjjnfebmndnbdoobhpoommaef?hl=en&authuser=0"
        },
        {
            title:"Brutus",
            description:"A course-scheduling website for Northwestern students to plan their schedule before registration.",
            link:"https://github.com/CS330schedule/course-planner"
        },
        {
            title:"Yelp Dataset Analysis",
            description:"An analysis on the Yelp Open Dataset to better visualize and find trends in the Yelp reviews.",
            link:"https://drive.google.com/drive/folders/1REr1iY8m-EbWNbTgyQGzbfqib0XrkMRl?usp=sharing"
        }
    ]

    return (
        <div className="Projects">
            <Title text="PROJECTS" />
            <Cards cardsData={cardsData}/>
        </div>
    );
}