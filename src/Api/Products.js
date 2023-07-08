import Products  from "./Products.json";

export default function getAll() {
    return Promise.resolve(Products);
}

export function getById(id) {
    const Product =Products.find(item => item.id === id); 
    return Promise.resolve(Product);
}
