import { useState } from 'react';

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientList = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>);

  function handleSubmit(e) {
    /* ```ingredients.push(newIngredient);``` how we would add with vanila JS */
    setIngredients((prevIngredient) => [
      ...prevIngredient,
      newIngredient,
    ]); /* this is how we add items to an array in React */

    e.preventDefault(); /* Prevent form submission, trigger onClick instead*/
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get('ingredient');
  }

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="e.g. milk" aria-label="Add an ingredient" name="ingredient" />
        <button className="add-btn">Add ingredient</button>
      </form>
      <ul>{ingredientList}</ul>
    </main>
  );
}
