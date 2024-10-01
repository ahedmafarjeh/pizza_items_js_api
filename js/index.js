
async function getPizzaData(){

  const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
  const data = await response.json();
  console.log(data.recipes[0].title);
  
  const pizza = data.recipes.map(function(item){
    return `
        <div class="item">
          <h2>${item.title}</h2>
          <img src="${item.image_url}" alt="${item.title}">
        </div>
    `;
  }).join('');
  
  document.querySelector('.row').innerHTML = pizza;

}

getPizzaData();
