import './Featured_grid.css'
import Featured_card from "../Featured_card/Featured_card"
import test from '../../assets/test.png'
import tree from '../../assets/image.png'

export default function Featured_grid(){
    return(
        <div className="grid">
            <Featured_card image={test}
            title="this is an epic"
            content="And hopefuly there is much more of it to come!"
            />
            <Featured_card image={tree}
            title="Trees are growing slower!"
            content="Due to a bad year and other climate issues, trees in Finland are growing several times slower."
            />
        </div>
    )
}