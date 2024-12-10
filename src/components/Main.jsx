import React from 'react';

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientList = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>);

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');

    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
    /* this is how we add items to an array in React */
    /* ```ingredients.push(newIngredient);``` how we would add with vanila JS */
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input type="text" placeholder="e.g. milk" aria-label="Add an ingredient" name="ingredient" />
        <button className="add-btn">Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientList}
          </ul>

          {ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button>Get a recipe</button>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
