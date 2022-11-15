import '../css/Cards.css';
import Card from './Card';

export default function Cards({ cardsData }) {
    /*
        PROPS:
            cardsData {array[Object]}:
                contains data required for <Card />
    */
    return (
        <div className="Cards">
            {
                cardsData.map(({ title, caption, description, link }) => (
                    <Card
                        title={title}
                        caption={caption}
                        description={description}
                        link={link}
                    />
                ))
            }
            {/* <Card 
                title="Timed Web Blocker"
                description="Lorem ipsum"
                link="https://google.com"
            />
            <Card 
                title="Timed Web Blocker"
                description="Lorem ipsum"
                link="https://google.com"
            />
            <Card 
                title="Timed Web Blocker"
                description="Lorem ipsum"
                link="https://google.com"
            />
            <Card 
                title="Timed Web Blocker"
                description="Lorem ipsum"
                link="https://google.com"
            /> */}
        </div>
    );
}