export async function getRecipes() {
    const response = await fetch('https://dummyjson.com/recipes')
    const data = await response.json()
    return data;  
}

export async function getRecipe(id) {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await response.json()
    return data;
}