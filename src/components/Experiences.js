import '../css/Experiences.css';
import Title from './Title';
import Cards from './Cards';

export default function Experiences() {
    const cardsData = [
        {
            title:"MU Collective",
            caption:"Research Assistant",
            description:"Developed an interactive visualization tool for researchers to better analyze a holistic representation of their data."
        },
        {
            title:"The Verse",
            caption:"Game Developer Intern",
            description:" Contributed to making a game in Unity3D aiming to improve the player's mental health and well-being."
        },
        {
            title:"Northwestern University",
            caption:"Peer Mentor",
            description:"Assisted students in reviewing and debugging their code"
        }
    ]
    return (
        <div className="Experiences">
            <Title text="EXPERIENCE" />
            <Cards cardsData={cardsData}/>
        </div>
    );
}