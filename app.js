const searchMeals = () => {
    const searchMealItem = document.getElementById('search-meal').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealItem}`;
    fetch(url)
      .then(res => res.json())
      .then(data => displayMeals(data.meals))
      .catch(error => displayMealError('Your search meal is unavailable. Please try another item.'))
  }
  // error message
  const displayMealError = error => {
    const errorMessage = document.getElementById('invalid-search-message');
    errorMessage.innerText = error;
  }
  
  //display meals
  const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
      const mealDiv = document.createElement('div');
      mealDiv.className = 'meal-card';
      mealDiv.innerHTML = `
    <img onclick="getMealInfo(${meal.idMeal})" class="card-img-top" src="${meal.strMealThumb}">
    <div class="card-body">
        <h5 class="card-title text-center">${meal.strMeal}</h5>
    </div>
    `;
      mealContainer.appendChild(mealDiv);
    });
  
  }
  // get meal details
  const getMealInfo = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
      .then(res => res.json())
      .then(data => details(data.meals))
  }
  
  function details(data) {
    const detailsDiv = document.getElementById('meal-Details');
    detailsDiv.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      detailsDiv.innerHTML = `
          <img src="${element.strMealThumb}">
          <p>${element.strIngredient1}</p>
          <p>${element.strIngredient2}</p>
          <p>${element.strIngredient3}</p>
          <p>${element.strIngredient4}</p>
          <p>${element.strIngredient5}</p>
          <p>${element.strIngredient6}</p>
          <p>${element.strIngredient7}</p>
          <p>${element.strIngredient8}</p>
          <p>${element.strIngredient9}</p>
          <p>${element.strInstructions}</p>
      `;
    }
  }