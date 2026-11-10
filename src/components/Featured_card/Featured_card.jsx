import './Featured_card.css'

export default function Featured_card(props){
    return(
        <div className="wrapper">
        <div className="card_image">
            <img src={props.image}/>
            </div>
            <div className="card_content">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
        </div>
        </div>
    )
}