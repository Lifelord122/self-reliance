import { Card } from 'react-bootstrap'
import './Featured_card.css'
import { Link } from 'react-router'

export default function Featured_card(props){
    return(
        <Card
        className='featured-card'>

            <Card.Img variant="top"
             src={props.image}/>

            <Card.Body>
                <Card.Title as="h3">
                <Link to={`/articles/${props.slug}`}>
                    {props.title}
                </Link>
                </Card.Title>

                <Card.Text>
                    {props.content}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}