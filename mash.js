

function getHome(){
    let ownHouse = process.argv[2];
    let house = ["Mansion", "Apartment", "Shack", "House", "Parents Basement"];
    let startHouse = house.length + 1;
    if (ownHouse){
        house.splice(startHouse,0, ownHouse);
    }    
    let houseAnswer = Math.floor(Math.random()*house.length);
    return house[houseAnswer];
}

function getChildrenCount(){
    let count = Math.floor(Math.random()*101);
    let choice = process.argv[3];
    if (choice){
        let betterCount = Math.random() > .5 ? choice : count;
    return betterCount;
    }
    return count;
}

function getCar(){
    let ownCar = process.argv[4];
    let car = ["1oHRrjU$J@^d", "Convertible", "Just a Wheel", "Sudan", "Box with Wheels", "No Car"];
    let startCar = car.length + 1;
    if (ownCar){
        car.splice(startCar,0, ownCar);
    }    
    let carAnswer = Math.floor(Math.random()*car.length);
    return car[carAnswer];
}

function getCarrer(){
    let ownCarrer = process.argv[5];
    let carrer = ["Actor", "Pianist", "Scientist", "Physisist", "Software Engineer", "Parent's Basement"];
    let startCarrer = carrer.length + 1;
    if (ownCarrer){
        carrer.splice(startCarrer,0, ownCarrer);
    }    
    let carrerAnswer = Math.floor(Math.random()*carrer.length);
    return carrer[carrerAnswer];
}

function mash(){
    return "You will live in a " + getHome() + ", and you have " + getChildrenCount() + " kids!" + " You'll be able to drive a " + getCar() + ", and work as a " + getCarrer();
}
console.log(mash());