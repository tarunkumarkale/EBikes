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
        image: pro_java,
        description: 'pro_java_1',
        price: 8.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal'
    },
    {
        id: 2,
        image: BLK,
        description: 'BLK',
        price: 7.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal'
    },
    {
        id: 3,
        image: consectetur,
        description: 'consectetur',
        price: 6.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal'
    },
    {
        id: 4,
        image: x1,
        description: 'x1+cherry+red', // Assuming the description matches the image file name
        price: 5.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal'
    },
    {
        id: 5,
        image: x11,
        description: 'x1+legend+card+w', // Assuming the description matches the image file name
        price: 4.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal'
    },
    {
        id: 6,
        image: x1b,
        description: 'x1b', // Assuming the description matches the image file name
        price: 3.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal'
    },
    {
        id: 7,
        image: STRIDE,
        description: 'STRIDE',
        price: 2.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal'
    },
    {
        id: 8,
        image: Hailland,
        description: 'Hailland',
        price: 2.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal'
    }
];

export default IndexForRent;
