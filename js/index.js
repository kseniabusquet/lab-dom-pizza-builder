// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  var whiteSauce = document.querySelectorAll('.sauce')[0]
  if(state.whiteSauce){
    whiteSauce.setAttribute('class','sauce')
  }else{
    whiteSauce.setAttribute('class','sauce sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  var glutenFreeCrust = document.querySelectorAll('.crust')[0]
  if(state.glutenFreeCrust){
    glutenFreeCrust.setAttribute('class','crust')
  }else{
    glutenFreeCrust.setAttribute('class','crust crust-gluten-free')
  }
}



function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  var btnPepperoni = document.querySelector('.btn-pepperoni')  
  if(state.pepperoni){
    btnPepperoni.classList.add('active')
  }else{
    btnPepperoni.classList.remove('active')
  }

  var btnMushrooms = document.querySelector('.btn-mushrooms')  
  if(state.mushrooms){
    btnMushrooms.classList.add('active')
  }else{
    btnMushrooms.classList.remove('active')
  }

  var btnGreenPeppers = document.querySelector('.btn-green-peppers')  
  if(state.greenPeppers){
    btnGreenPeppers.classList.add('active')
  }else{
    btnGreenPeppers.classList.remove('active')
  }

  var whiteSauce = document.querySelector('.btn-sauce')  
  if(state.whiteSauce){
    whiteSauce.classList.add('active')
  }else{
    whiteSauce.classList.remove('active')
  }

  var glutenFreeCrust = document.querySelector('.btn-crust')  
  if(state.glutenFreeCrust){
    glutenFreeCrust.classList.add('active')
  }else{
    glutenFreeCrust.classList.remove('active')
  }

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var list = document.querySelector('.panel.price ul')
  var totalPrice = document.querySelector('.panel.price strong')
  list.innerHTML=''
  totalPrice.innerHTML=''
  var li
  var total = 0
  if(state.pepperoni){
    li = document.createElement('li')
    li.textContent = `$${ingredients['pepperoni'].price} pepperoni`
    list.append(li)
    total += ingredients['pepperoni'].price
  }
  if(state.mushrooms){
    li = document.createElement('li')
    li.textContent = `$${ingredients['mushrooms'].price} mushrooms`
    list.append(li)
    total += ingredients['mushrooms'].price
  }

  if(state.greenPeppers){
    li = document.createElement('li')
    li.textContent = `$${ingredients['greenPeppers'].price} green peppers`
    list.append(li)
    total += ingredients['greenPeppers'].price
  }

  if(state.whiteSauce){
    li = document.createElement('li')
    li.textContent = `$${ingredients['whiteSauce'].price} white sauce`
    list.append(li)
    total += ingredients['whiteSauce'].price
  }

  if(state.glutenFreeCrust){
    li = document.createElement('li')
    li.textContent = `$${ingredients['glutenFreeCrust'].price} gluten free crust`
    list.append(li)
    total += ingredients['glutenFreeCrust'].price
  }

  totalPrice.innerHTML = `$${total + 10}`

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});