import './Featured_card.css'
import { Link } from 'react-router'

export default function Featured_card(props){
    return(
        <div className="wrapper">
        <div className="card_image">
            <img src={props.image}/>
            </div>
            <div className="card_content">
                <h3><Link to={`/articles/${props.slug}`}>
                    {props.title}
                </Link></h3>
                <p>{props.content}</p>
        </div>
        </div>
    )
}