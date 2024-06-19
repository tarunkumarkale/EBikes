import BLK from "../assets/imgShopR/BLK.webp";
import consectetur from "../assets/imgShopR/consectetur.jpg";
import Hailland from '../assets/imgShopR/Hailland.webp'
import x1 from '../assets/Imgshopele/x1+cherry+red.jpg';
import x11 from '../assets/Imgshopele/x1+legend+card+w.jpg';
import x1b from '../assets/Imgshopele/x1b.jpg';
import STRIDE from "../assets/img2/Stride_29.webp";
import pro_java from "../assets/img2/pro_java_1.webp";


const getRandomStockStatus = () => Math.random() < 0.5;
const getRandomAnimation = () => {
  const animations = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out'];
  return animations[Math.floor(Math.random() * animations.length)];
};

const IndexForRent = [
   
    {
        id: 1,
        image: BLK,
        description: 'Name : BLK',
        price: 7.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'Type : normal'
    },

    {
        id: 2,
        image: consectetur,
        description: 'Name : consectetur',
        price: 6.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
       type: 'Type : Racing Bike'
    },
   
  {
        id: 3,
        image: pro_java,
        description: 'Name : pro_java_1',
        price: 8.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'Type : normal'
    },
       
    {
        id:4 ,
        image: x11,
        description: 'Name : x1+legend+card+w', // Assuming the description matches the image file name
        price: 4.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'Type : electric',
    },
    {
        id: 5,
        image: x1b,
        description: 'Name : x1b', // Assuming the description matches the image file name
        price: 3.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'Type : electric',
    },
    , {
        id: 6,
        image: x1,
        description: 'Name : x1+cherry+red', // Assuming the description matches the image file name
        price: 5.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'Type : electric',
    },
    {
        id: 7,
        image: STRIDE,
        description: 'Name : STRIDE',
        price: 2.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'Type : Mountain Bike'
    },
    {
        id: 8,
        image: Hailland,
        description: 'Name : Hailland',
        price: 2.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'Type : normal'
    }
];

export default IndexForRent;
