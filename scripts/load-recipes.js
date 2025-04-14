const recipesContainer = document.getElementById('recipes-container');

// Fetch data from Firestore (ensure Firestore is properly initialized)
firebase.firestore().collection('recipes').get().then(snapshot => {
    snapshot.forEach(doc => {
        const recipe = doc.data();
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe-card');

        recipeElement.innerHTML = `
            <img src="${recipe.imageUrl}" alt="${recipe.title}">
            <div class="info">
                <h3>${recipe.title}</h3>
                <small>By ${recipe.chefName}</small>
                <p>${recipe.shortDescription}</p>
                <a href="recipe-details.html?id=${doc.id}">View Recipe</a>
            </div>
        `;
        recipesContainer.appendChild(recipeElement);
    });
});
