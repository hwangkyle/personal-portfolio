import '../css/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solid from '@fortawesome/free-solid-svg-icons';

export default function Card({ title, caption, description, link }) {
    return (
        <div className="Card">
            <h2>{title}</h2>
            {
                caption ?
                <i>{caption}</i> :
                <></>
            }
            <p>{description}</p>
            { 
                link ?
                (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        LINK
                        <FontAwesomeIcon icon={ solid.faRightLong } />
                    </a>
                ) :
                <></>
            }
        </div>
    );
}