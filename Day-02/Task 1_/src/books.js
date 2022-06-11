const categories = [
  'Action and Adventure',
  'Classics',
  'Comic Book or Graphic Novel',
  'Detective and Mystery',
  'Fantasy',
  'Historical Fiction',
  'Horror',
  'Literary Fiction',
  'Art & Photograph',
];

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getRandomElement = (elements) => {
  return elements[generateRandomNumber(0, elements.length - 1)];
}

var books = [
  {
    "ISBN": 1159142,
    "Category": getRandomElement(categories),
    "NumberOfPages": generateRandomNumber(30, 100),
    "Name": "Vrienden voor het leven",
    "Author": "Maeve Binchy",
    "Image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/5/3/6/6/1001004011806635.jpg",
    "Price": 10.00
  },
  {
    "ISBN": 9780552159722,
    "Category": getRandomElement(categories),
    "NumberOfPages": generateRandomNumber(30, 100),
    "Name": "Deception point",
    "Author": "Dan Brown",
    "Image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/8/8/9/8/1001004006878988.jpg",
    "Price": 9.99
  },  {
    "ISBN": 9780552159721,
    "Category": getRandomElement(categories),
    "NumberOfPages": generateRandomNumber(30, 100),
    "Name": "Deception point",
    "Author": "Dan Brown",
    "Image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/8/8/9/8/1001004006878988.jpg",
    "Price": 9.99
  },
  {
    "ISBN": 9789022558027,
    "Category": getRandomElement(categories),
    "NumberOfPages": generateRandomNumber(30, 100),
    "Name": "Magic staff",
    "Author": "Terry Brooks",
    "Image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/2/2/5/2/9200000002212522.jpg",
    "Price": 17.50
  },
  {
    "ISBN": 9781841499789,
    "Category": getRandomElement(categories),
    "NumberOfPages": generateRandomNumber(30, 100),
    "Name": "Bloodfire Quest",
    "Author": "Terry Brooks",
    "Image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/7/0/0/7/9200000009027007.jpg",
    "Price": 24.5
  },
  {
    "ISBN": 9781409117933,
    "Category": getRandomElement(categories),
    "NumberOfPages": generateRandomNumber(30, 100),
    "Name": "A Week in Winter",
    "Author": "Maeve Binchy",
    "Image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/6/2/8/0/9200000008070826.jpg",
    "Price": 11.99
  },
  {
    "ISBN": 9789460681387,
    "Category": getRandomElement(categories),
    "NumberOfPages": generateRandomNumber(30, 100),
    "Name": "Blue Curacao",
    "Author": "Linda van Rijn",
    "Image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/0/9/4/2/9200000010732490.jpg",
    "Price": 48.99
  }
]

export default books;