import cartBot from '../assets/Imgshopele/cartBot.png';
import TRex from '../assets/Imgshopele/TRex.jpg';
import x1 from '../assets/Imgshopele/x1+cherry+red.jpg';
import x11 from '../assets/Imgshopele/x1+legend+card+w.jpg';
import x1b from '../assets/Imgshopele/x1b.jpg';
import X2 from '../assets/Imgshopele/X2-red.jpg';



const getRandomStockStatus = () => Math.random() < 0.5;
const getRandomAnimation = () => {
  const animations = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out'];
  return animations[Math.floor(Math.random() * animations.length)];
};


const ImagesElectric = [
  {
    id: 1,
    image: cartBot,
    description: 'cartBot',
    type: 'electric',
    price: '9999',
    comp:'electric',
    tax:'8%',
    inStock: getRandomStockStatus(),
    animation: getRandomAnimation(),
  },
  {
    id: 2,
    image: TRex,
    description: 'TRex',
    type: 'electric',
    price: '899.99',
    comp:'electric',
    tax:'8%',
    inStock: getRandomStockStatus(),
    animation: getRandomAnimation(),
  },
  {
    id: 3,
    image: x1,
    description: 'x1+cherry+red',
    type: 'electric',
    price: '7969',
    comp:'electric',
    tax:'8%',
    inStock: getRandomStockStatus(),
    animation: getRandomAnimation(),
  },
  {
    id: 4,
    image: x11,
    description: 'x1+legend+card+w',
    type: 'electric',
    price: '8449',
    comp:'electric',
    tax:'9%',
    inStock: getRandomStockStatus(),
    animation: getRandomAnimation(),
  },
  {
    id: 5,
    image: x1b,
    description: 'x1b',
    type: 'electric',
    price: '759.99',
    comp:'electric',
    tax:'10%',
    inStock: getRandomStockStatus(),
    animation: getRandomAnimation(),
  },
  {
    id: 6,
    image: X2,
    description: 'X2-red',
    type: 'electric',
    price: '899.99',
    comp:'electric',
    tax:'8%',
    inStock: getRandomStockStatus(),
    animation: getRandomAnimation(),
  },
  {
    id: 7,
    image: X2,
    description: 'X2-red',
    type: 'electric',
    price: '899.99',
    comp:'electric',
    tax:'8%',
    inStock: getRandomStockStatus(),
    animation: getRandomAnimation(),
  },
  {
    id: 8,
    image: X2,
    description: 'X2-red',
    type: 'electric',
    price: '899.99',
    comp:'electric',
    tax:'8%',
    inStock: getRandomStockStatus(),
    animation: getRandomAnimation(),
  },
];

export default ImagesElectric;
