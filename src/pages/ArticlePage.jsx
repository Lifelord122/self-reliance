import { useParams } from "react-router"
import { articles } from "../data/articles"

export default function ArticlePage(props){
    const { slug } = useParams();
    const article = articles.find((article) => article.slug === slug);

    if(!article){
        <h1>Article not found!</h1>
    }

    return(
        <article>
      <h1>{article.title}</h1>

      {article.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
        
    )
}