import React from 'react';
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');

    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
    /* this is how we add items to an array in React */
    /* ```ingredients.push(newIngredient);``` how we would add with vanila JS */
  }

  function getRecipe() {
    setRecipeShown((prev) => !prev);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input type="text" placeholder="e.g. milk" aria-label="Add an ingredient" name="ingredient" />
        <button className="add-btn">Add ingredient</button>
      </form>

      {ingredients.length > 0 && <IngredientsList listIngredient={ingredients} handleClick={getRecipe} />}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
