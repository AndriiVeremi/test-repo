// // Створити функцію яка буде приймати 2 параметра.
// // 1 Масив студентів.
// // 2 Мову програмування яку потрібно знайти.
// // Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [
//   {
//     name: `Den`,
//     language: `html`,
//   },
//   {
//     name: `Petro`,
//     language: `css`,
//   },
//   {
//     name: `Egor`,
//     language: `js`,
//   },
//   {
//     name: `Max`,
//     language: `html`,
//   },
//   {
//     name: `Olga`,
//     language: `css`,
//   },
//   {
//     name: `Kate`,
//     language: `js`,
//   },
//   {
//     name: `Ivan`,
//     language: `html`,
//   },
// ];

// // створити функцію
// // відфільтрувати масив filter()
// // перебрати масив Map()

// //------------------------------------------------------------------------------------

// // Створити функцію яка буде шукати нарциса.
// // Головна умова нарциса знають всі, нарцис не знає нікого.

// const people1 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: ["Alex"],
//   },
// ]; //Not found

// const people2 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: [],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
// ]; // Not found

// const people3 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
// ]; // Jhon

// //-------------------------------------------------------------------------------------------------

// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [
//   {
//     id: "sku1",
//     qty: 1,
//   },
//   {
//     id: "sku2",
//     qty: 2,
//   },
//   {
//     id: "sku3",
//     qty: 3,
//   },
//   {
//     id: "sku1",
//     qty: 6,
//   },
//   {
//     id: "sku1",
//     qty: 8,
//   },
//   {
//     id: "sku2",
//     qty: 19,
//   },
//   {
//     id: "sku4",
//     qty: 1,
//   },
// ];

// let counter = 0;
// // for (let i = 0; i < products.length; i += 1) {
// //   for (let j = products.length - 1; i < j; j -= 1) {
// //     if (products[i].id === products[j].id) {
// //       products[i].qty += products[j].qty;
// //       products.splice(j, 1);
// //     }
// //     counter += 1;
// //   }
// // }

// console.time("start");
// for (let i = 0; i < products.length; i += 1) {
//   for (let j = i + 1; j < products.length; j += 1) {
//     if (products[i].id === products[j].id) {
//       products[i].qty += products[j].qty;
//       products.splice(j, 1);

//       j -= 1;
//     }
//     counter += 1;
//   }
// }
// console.timeEnd("start");
// // console.log("products-->", products);
// // start: 0.31494140625 ms
// console.log("counter-->", counter);

//-------------------------------------------------------------

// const cars = [{
//   car: "Honda",
//   type: "Civic",
//   price: 12000,
// },
// {
//   car: "Audi",
//   type: "Q7",
//   price: 40000,
// },
// {
//   car: "BMW",
//   type: "5 siries",
//   price: 9000,
// },
// {
//   car: "Honda",
//   type: "Accord",
//   price: 20000,
// },
// {
//   car: "Volvo",
//   type: "XC60",
//   price: 7000,
// },
// ];

// const findCars = (cars, min, max) => {
//   const filteredCars = cars.filter(({ price }) => price >= min && price <= max);
//   return filteredCars.reduce(
//     (acc, { car, type }, idx) => {
//       return acc + `${idx + 1}. ${car} ${type}\n`;
//     },
//     filteredCars.length
//       ? `Кількість знайдених автомобілів ${filteredCars.length}: \n`
//       : "Вибачте але за вашим пошуком жодного авто не було знайдено."
//   );
// };

// console.log(findCars(cars, 7000, 9000));
// console.log(findCars(cars, 7000, 9000))
