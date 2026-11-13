import "bootstrap/dist/css/bootstrap.min.css"
import "./RecipeFinderPage.css"

import { useState } from "react"
import { Card } from "react-bootstrap";


export default function RecipeFinderPage(){
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchComplete, setSearchComplete] = useState(false);

    async function searchRecipes(n) {
        n.preventDefault();

        const query = search.trim();

        if(!query){
            return;
        }

        setLoading(true);
        setSearchComplete(true);
    

    try{
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
        );

        if(!response.ok){
            throw new Error("Something went wrong.");
        }

        const data = await response.json();
        
        setResults(data.meals ?? []);
    } catch (error){
        setError("Could not load.")
    } finally {
        setLoading(false);
    }
    }

    return(
        <section>
        <form onSubmit={searchRecipes}>
            <label htmlFor="recipe-search">Recipe name</label>

            <input
            id="recipe-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Type any food here"
            />

            <button
            type="submit"
            disabled={loading || !search.trim()}
            >
                {loading ? "Searching..." : "Search"}
            </button>
        </form>


        {error && <p role="alert">{error}</p>}

        {!loading && !error && searchComplete && results.length === 0 && <p>No recipes found.</p>}

        <div className="recipe-results">
            {results.map((recipe) => (
                <Card
    key={recipe.idMeal}
    className="recipe-card"
    style={{ width: "300px", maxWidth: "100%" }}
>
                    

                    <Card.Img
                    variant="top"
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    />
                    
                    <Card.Body>

                        <Card.Title>{recipe.strMeal}</Card.Title>

                        <Card.Text>{recipe.strCategory}</Card.Text>

                    <details>
                        <summary>Read instructions</summary>
                        <p style={{ whiteSpace: "pre-line"}}>
                            {recipe.strInstructions}
                        </p>
                    </details>
                </Card.Body>
                </Card>
            ))}
        </div>
        </section>
    );
}