const recipesContainer = document.getElementById('recipes-container');

firebase.firestore().collection('recipes').get().then(snapshot => {
  snapshot.forEach(doc => {
    const recipe = doc.data();
    const recipeElement = document.createElement('div');
    recipeElement.classList.add('recipe-card');

    recipeElement.innerHTML = `
      <img src="${recipe.imageUrl}" alt="${recipe.title}">
      <div class="info">
          <h3>${recipe.title}</h3>
          <small>By ${recipe.chefName || 'Unknown Chef'}</small>
          <p>${(recipe.shortDescription || '').substring(0, 70)}...</p>
          <a href="recipe-details.html?id=${doc.id}">View Recipe</a>
      </div>
    `;
    recipesContainer.appendChild(recipeElement);
  });
});
