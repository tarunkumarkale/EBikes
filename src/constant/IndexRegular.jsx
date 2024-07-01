import BLK from "../assets/imgShopR/BLK.webp";
import consectetur from "../assets/imgShopR/consectetur.jpg";
import Hailland from '../assets/imgShopR/Hailland.webp'
import dolor from "../assets/imgShopR/dolor.jpg";
import odio from "../assets/imgShopR/odio.jpg";
import one from "../assets/imgShopR/one.png";
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
        price: 8999,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal',
        tax:'8%',
        comp:'Regular',
        rateing:4,
    },
    {
        id: 2,
        image: BLK,
        description: 'BLK',
        price: 11999,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal',
        tax:'17%',
        comp:'Regular',
        rateing:4,
    },
    {
        id: 3,
        image: consectetur,
        description: 'consectetur',
        price: 6909,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'Racing Bike',
        tax:'8%',
        comp:'Regular',
        rateing: 3,

    },
    {
        id: 4,
        image: dolor,
        description: 'dolor',
        price: 15999,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'Mountain Bike',
        tax:'7%',
        comp:'Regular',
        rateing:5,
    },
    {
        id: 5,
        image: odio,
        description: 'odio',
        price: 10499,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal',
        tax:'3%',
        comp:'Regular',
        rateing:5,
    },
    {
        id: 6,
        image: one,
        description: 'one',
        price: 13499,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal',
        tax:'6%',
        comp:'Regular',
        rateing:5,
    },
    {
        id: 7,
        image: STRIDE,
        description: 'STRIDE',
        price: 32899,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'Mountain Bike',
        tax:'9%',
        comp:'Regular',
        rateing: 3,
    },
    {
        id: 8,
        image: Hailland,
        description: 'Hailland',
        price: 43799,
        inStock: getRandomStockStatus(),
        animation: getRandomAnimation(),
        type: 'normal',
        tax:'8%',
        comp:'Regular',
        rateing:4,
    }
];

export default ForNormalBicycle;
