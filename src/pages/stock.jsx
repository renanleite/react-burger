import React, { useState, useEffect } from "react";

export function Stock() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    fetch("https://wvrb9y7t9c.execute-api.sa-east-1.amazonaws.com/Prod/stock", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIngredients(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <h1>Ingredients Stock</h1>
      <table>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient) => {
            return (
              <tr key={ingredient.id_ingredient}>
                <td>{ingredient.ingredient_name}</td>
                <td>{ingredient.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
