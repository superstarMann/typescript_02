interface person {
    name: string;
    age: number;
    color: string;
}


const men = {
    name: "hun",
    age: 22,
    color: "red"
};


const seungHun = (men: person): string => {
    return `i'm ${men.name}, i'm ${men.age} and my favorite is ${men.color}!`;
};

console.log(seungHun(men));

export {};