import './Featured_grid.css'
import Featured_card from "../Featured_card/Featured_card"
import test from '../../assets/test.png'
import tree from '../../assets/image.png'

export default function Featured_grid(){
    return(
        <div className="grid">
            <Featured_card image={test}
            slug="wonder"
            title="What a wonderful article!"
            content="And hopefuly there many more!"
            />
            <Featured_card image={tree}
            slug="trees"
            title="Trees are growing slower!"
            content="Due to a bad year and other climate issues, trees in Finland are growing several times slower."
            />
            <Featured_card image={tree}
            slug="test"
            title="Working hard."
            content="So much work to be done and never enough time to do it all."
            />
        </div>
    )
}