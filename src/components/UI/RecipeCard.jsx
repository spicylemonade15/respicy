const RecipeCard = ({item, onClick}) => {
    const {name, cuisine, difficulty, rating, image} = item;



  return (
    <div className="recipe-card" onClick={onClick}>
        
        <img src={image} className="recipe-card-image"></img>
        <div className="recipe-card-content">

        <p>Name: {name}</p>
        <p>Cuisine: {cuisine}</p>
        <p>Difficulty: {difficulty}</p>
        <p>Rating: {rating}</p>
        </div>

    </div>
  )
}

export default RecipeCard