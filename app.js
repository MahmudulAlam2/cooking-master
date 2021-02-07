fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
.then(res => res.json())
.then(data => displayMeal(data));

const displayMeal = meals => {
    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        const mealDiv = document.createElement('div');

        const h3 = document.createElement('h3')
        h3.innerText = meal.list;
        const p = document.createElement('p')
        p.innerText = meal.Ingredients;
        mealDiv.appendChild(h3);
        mealDiv.appendChild(p);

        mealsDiv.appendChild(mealDiv);
        
    }
}



// const displayMeal = categories =>{
//     const categoriesDiv = document.getElementById('categories');
//     categories.forEach(category => {
//         const categoryDiv = document.createElement('div');
//         categoryDiv.className = 'category';
//         const categoryInfo = `
//             <h3 class="category-idMeal">${category.idMeal}</h3>
//             <p>${category.capital}</p>
//             <button onclick="displayCategoryDetail('${category.idMeal}')">Details</button>
//         `;
//         categoryDiv.innerHTML = categoryInfo;
//         categoriesDiv.appendChild(categoryDiv);
//     });
// }

// const displayCategoryDetail = idMeal => {
//     const url = `https://www.themealdb.com/api/json/v1/1/random.php/${idMeal}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => rendercategoryInfo(data[0]));
// }

// const rendercategoryInfo = category => {
//     const categoryDiv = document.getElementById('categoryDetail');
//     categoryDiv.innerHTML = `
//         <h1>${category.idMeal}</h1>`
    
// }