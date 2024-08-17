import Mouse1 from './Mouse1.jpeg';
import CreativeDesign from './Creative Design (2).jpg'
import Charger from './1.jpg';
import Stand from './p9.jpg';

let products = [
    {
        id: 1,
        description: "iPhone Stand",
        name: "iPhone Stand",
        title: "iPhone Stand Holder",
        category: "phones",
        image: Stand,
        price: 22.99
    },
    {
        id: 2,
        description: "Keyboard",
        name: "Foldable Keyboard",

        title: "Foldable Keyboard",
        category: 'ipads',
        image: CreativeDesign,
        price: 45.99
    },
    {
        id: 3,
        description: "Mouse",
        name: "Mouse",
        title: "a title",
        category: "laptops",

        image: Mouse1,
        price: 25.00
    },
    {
        id: 4,
        description: "Charging stantion for iphone and Apple Watch",
        title: "Charging Station",
        name: "Charging Stand",
        category: "phones",
        image: Charger,
        price: 25.00
    }
];
export default products;