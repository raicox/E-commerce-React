export const TotalPrice = (products) => {
    let sum = 0;
    
    products.forEach(element => {
        sum += element.price
    });

    return sum
};

