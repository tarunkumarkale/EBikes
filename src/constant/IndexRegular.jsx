import BLK from "../assets/imgShopR/BLK.webp";
import consectetur from "../assets/imgShopR/consectetur.jpg";
import Hailland from '../assets/imgShopR/Hailland.webp'
import dolor from "../assets/imgShopR/dolor.jpg";
import odio from "../assets/imgShopR/odio.jpg";
import one from "../assets/imgShopR/one.jpg";
import STRIDE from "../assets/img2/Stride_29.webp";
import pro_java from "../assets/img2/pro_java_1.webp";

const getRandomStockStatus = () => Math.random() < 0.5;
const getRandomAnimation = () => {
  const animations = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out'];
  return animations[Math.floor(Math.random() * animations.length)];
};

const ForNormalBicycle = [
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
        image: dolor,
        description: 'dolor',
        price: 5.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal'
    },
    {
        id: 5,
        image: odio,
        description: 'odio',
        price: 4.99,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal'
    },
    {
        id: 6,
        image: one,
        description: 'one',
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

export default ForNormalBicycle;
