let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

/* Save recipes to localStorage */
function saveData() {
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

/* Add or Update Recipe */
function addRecipe() {
  const id = document.getElementById("recipeId").value;
  const title = document.getElementById("title").value.trim();
  const ingredients = document.getElementById("ingredients").value.trim();
  const instructions = document.getElementById("instructions").value.trim();
  const cuisine = document.getElementById("cuisine").value;

  if (!title || !ingredients) {
    alert("Title and Ingredients are required!");
    return;
  }

  if (id) {
    const index = recipes.findIndex(r => r.id === id);
    recipes[index] = { id, title, ingredients, instructions, cuisine };
  } else {
    recipes.push({ id: Date.now().toString(), title, ingredients, instructions, cuisine });
  }

  saveData();
  clearForm();
  displayRecipes();
}

/* Display all recipes */
function displayRecipes() {
  const list = document.getElementById("recipeList");
  list.innerHTML = "";
  recipes.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <h3>${recipe.title}</h3>
      <p><b>Ingredients:</b> ${recipe.ingredients}</p>
      <p><b>Instructions:</b> ${recipe.instructions}</p>
      <p><b>Cuisine:</b> ${recipe.cuisine}</p>
      <div class="card-actions">
        <button class="secondary-btn" onclick="editRecipe('${recipe.id}')">Edit</button>
        <button class="danger-btn" onclick="deleteRecipe('${recipe.id}')">Delete</button>
      </div>
    `;
    list.appendChild(card);
  });
}

/* Edit recipe */
function editRecipe(id) {
  const r = recipes.find(x => x.id === id);
  document.getElementById("recipeId").value = r.id;
  document.getElementById("title").value = r.title;
  document.getElementById("ingredients").value = r.ingredients;
  document.getElementById("instructions").value = r.instructions;
  document.getElementById("cuisine").value = r.cuisine;
}

/* Delete recipe */
function deleteRecipe(id) {
  recipes = recipes.filter(r => r.id !== id);
  saveData();
  displayRecipes();
}

/* Search recipes */
function searchRecipes() {
  const text = document.getElementById("search").value.toLowerCase();
  const filter = document.getElementById("filterCuisine").value;
  const list = document.getElementById("recipeList");
  list.innerHTML = "";

  recipes.forEach(r => {
    const matchText = r.title.toLowerCase().includes(text) || r.ingredients.toLowerCase().includes(text);
    const matchCuisine = filter === "" || r.cuisine === filter;
    if (matchText && matchCuisine) displayRecipesFiltered(r);
  });
}

function displayRecipesFiltered(recipe) {
  const list = document.getElementById("recipeList");
  const card = document.createElement("div");
  card.className = "recipe-card";
  card.innerHTML = `
      <h3>${recipe.title}</h3>
      <p><b>Ingredients:</b> ${recipe.ingredients}</p>
      <p><b>Instructions:</b> ${recipe.instructions}</p>
      <p><b>Cuisine:</b> ${recipe.cuisine}</p>
      <div class="card-actions">
        <button class="secondary-btn" onclick="editRecipe('${recipe.id}')">Edit</button>
        <button class="danger-btn" onclick="deleteRecipe('${recipe.id}')">Delete</button>
      </div>
  `;
  list.appendChild(card);
}

/* Clear form */
function clearForm() {
  document.getElementById("recipeId").value = "";
  document.getElementById("title").value = "";
  document.getElementById("ingredients").value = "";
  document.getElementById("instructions").value = "";
  document.getElementById("cuisine").value = "";
}

/* Clear search */
function clearSearch() {
  document.getElementById("search").value = "";
  document.getElementById("filterCuisine").value = "";
  displayRecipes();
}

/* Load recipes on start */
displayRecipes();
