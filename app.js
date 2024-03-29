const products = [
  { id: 1, name: 'Kettle', price: 300, imageUrl: './kettle.jpg' },
  { id: 2, name: 'Notebooks', price: 50, imageUrl: './71o7XtyLMgL.jpg' },
  { id: 3, name: 'Mattress', price: 2000, imageUrl: './56101508SD05922_01_803x602.jpg' },
  { id: 4, name: 'Cycle', price: 4000, imageUrl: './cycle.jpg' },
  { id: 5, name: 'Umbrella', price: 600, imageUrl: './Umbrella (1).jpg' },
  { id: 6, name: 'Calculator', price: 400, imageUrl: './scientific-calculator-solar-power-260nw-96475790.webp' },
];

function displayProducts() {
  const productListings = document.getElementById('product-listings');
  productListings.innerHTML = '';
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Rs. ${product.price}</p>
        <button>Add to Cart</button>
      `;
    productListings.appendChild(productElement);
  });
}

function searchProducts() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
  displayProducts(filteredProducts);
}

function joinus(event) {
  console.log(event.id);
  let newdiv = document.createElement('div');
  newdiv.setAttribute('id', 'formdiv');

  let form = document.createElement('form');
  form.classList.add(event.class);
  form.setAttribute('id', 'signin');
  newdiv.appendChild(form);

  let formHeading = document.createElement('h3');
  formHeading.innerText = 'Sign up';
  form.appendChild(formHeading);

  let nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('placeholder', 'Your Name');
  form.appendChild(nameInput);

  let regInput = document.createElement('input');
  regInput.setAttribute('type', 'text');
  regInput.setAttribute('placeholder', 'Your Registration Number');
  form.appendChild(regInput);

  let emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('placeholder', 'Your Email');
  form.appendChild(emailInput);

  let passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('placeholder', 'Password');
  form.appendChild(passwordInput);

  let containerYes = document.createElement('div');
  let containerNo = document.createElement('div');


  let hostelInputYes = document.createElement('input');
  hostelInputYes.setAttribute('type', 'radio');
  hostelInputYes.setAttribute('name', 'hostel');
  hostelInputYes.setAttribute('value', 'yes');

  let hostelLabelYes = document.createElement('label');
  hostelLabelYes.innerText = 'Yes';


  let hostelInputNo = document.createElement('input');
  hostelInputNo.setAttribute('type', 'radio');
  hostelInputNo.setAttribute('name', 'hostel');
  hostelInputNo.setAttribute('value', 'no');

  let hostelLabelNo = document.createElement('label');
  hostelLabelNo.innerText = 'No';

  let query = document.createElement('h4');
  query.innerText = "Residing in hostel?";

  containerYes.appendChild(hostelInputYes);
  containerYes.appendChild(hostelLabelYes);
  containerNo.appendChild(hostelInputNo);
  containerNo.appendChild(hostelLabelNo);

  form.appendChild(query);
  form.appendChild(containerYes);
  form.appendChild(containerNo);



  let submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  document.body.appendChild(newdiv);
};



window.onload = function () {
  displayProducts();
};
