import './Categories.css'
import CategoryCard from '../CategoryCard/CategoryCard'

export default function Categories(){
    return(
    <div className='grid'>
        <CategoryCard title="Cooking"
        content="Food and stuff." />
        <CategoryCard title="Crafts"
        content="Sewing so on"/>
        <CategoryCard title="Survival"
        content="Utilize nature"/>
        <CategoryCard title="Sustainability"
        content="Save the earth!"/>
        <CategoryCard title="Farming"
        content="Chickens lay eggs :)"/>
    </div>
    )
}