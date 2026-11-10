import './CategoryCard.css'
export default function CategoryCard(props){
    return(
        <div className="wrapper">
            <div className="card_content">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
        </div>
        </div>
    )
}