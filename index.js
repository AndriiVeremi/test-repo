// Створіть клас "CarListing" t для представлення оголошення про продаж автомобіля.
// Клас повинен мати наступні властивості та методи:
// make: Рядок, який представляє марку автомобіля.
// model: Рядок, який представляє модель автомобіля.
// year: Ціле число, яке вказує рік випуску автомобіля.
// price: Десяткове число, яке представляє ціну автомобіля.
// owner: Рядок, який представляє ім'я або інформацію про власника автомобіля.
// contactInfo: Рядок, який містить контактну інформацію продавця.
// sold: Булеве значення, яке показує, чи було авто продано (по замовчуванню - false).

// Методи класу:

// markAsSold(): Метод, який встановлює значення властивості sold в true, вказуючи,
//що авто було продано.

// getListingInfo(): Метод, який повертає рядок, що містить інформацію про оголошення
//про продаж автомобіля.
//Формат рядку: "Продається: [рік] [марка] [модель] за [ціна]$ власником [власник]. Контактна інформація: [контактна інформація]".

// Робота з DOM
// Свори форму для створення еклемпляру класу CarListing
// Кожне оголошення потрібно відмалювати як картку
//----------------------------------------------------------------------------------------------------

class CarListing {
  #sold;
  constructor({ make, model, year, price, owner, contactInfo, sold = false }) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
    this.owner = owner;
    this.contactInfo = contactInfo;
    this.#sold = sold;
  }

  markAsSold() {
    this.#sold = true;
  }

  getListingInfo() {
    return `Продається: ${this.year} ${this.make} ${this.model} за ${price} власником ${this.owner}. Контактна інформація: ${this.contactInfo}`;
  }
}

const refs = {
  form: document.querySelector(".js-addForm"),
  list: document.querySelector(".js-list-car"),
};

refs.form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const arrCar = [];

  const formData = new FormData(e.currentTarget);
  const carData = {};

  formData.forEach((value, key) => {
    carData[key] = value;
  });

  arrCar.push(new CarListing(carData));
  refs.list.insertAdjacentHTML("afterbegin", makeCar(arrCar));
  e.currentTarget.reset();
}

function makeCar(objCar) {
  return objCar
    .map(({ make, model, year, price, owner, contactInfo }) => {
      return `<li class="item">
                <p class="text">Марка авто: ${make}</p>
                <p class="text">Модель: ${model}</p>
                <p class="text">Рік: ${year}</p>
                <p class="text">Ціна: ${price}</p>
                <p class="text">Імя власника: ${owner}</p>
                <p class="text">Крнтактна інформація: ${contactInfo}</p>
            </li>`;
    })
    .join("");
}
