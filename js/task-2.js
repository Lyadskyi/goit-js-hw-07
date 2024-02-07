const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const galleryEl = document.querySelector('.gallery');

const galleryImages = images
  .map(image => {
  const listGallery = document.createElement('li');
  const imgGallery = document.createElement('img');
    listGallery.append(imgGallery);
    imgGallery.classList.add('img-gallery');
    imgGallery.src = image.url;
    imgGallery.alt = image.alt;
    return listGallery;
});

galleryEl.append(...galleryImages);

// ---------- REMARKS OF THE MENTOR ---------- //

// ✅ 2. Завдання вирішено правильно
// Проблему вирішено правильно, з деякими можливостями для вдосконалення.

// task-2.js - Well executed moments/Добре виконані моменти //

// Семантичні назви: назви змінних, такі як: galleryEl, galleryImages, та описові параметри, як image, є досить зрозумілими й сприяють
// розумінню мети коду.

// Користування функцією Array Map: використання методу.map() для створення елементів галереї з масиву images є добрим функціональним
// підходом.

// Створення елементів DOM: використання document.createElement() для створення нових елементів є правильно здійсненим.

// Ефективна маніпуляція DOM: додавання всіх створених елементів однією операцією за допомогою galleryEl.append(...galleryImages) є
// ефективним і відповідає вимозі здійснення одиничної операції додавання.

// task-2.js - Improvement/Покращення //

// Надлишкова змінна: хоча і не є помилкою, створення змінної listGallery в кожній ітерації під час виклику.map() не є необхідним,
// адже можна було б безпосередньо повертати створений li. Це питання мінорної продуктивності.

// task-2.js - Response/Відгук //

// Завдання прийнято, з невеликим зауваженням щодо оптимізації стосовно створення непотрібних змінних у циклі .map().
// Розгляньте безпосереднє додавання нових елементів до фрагменту документа або створення рядка HTML та їх додавання однією
// операцією до DOM для ще більш очищеного підходу. Тим не менш, ви успішно виконали вимоги завдання. Добра робота!
