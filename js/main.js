class Traveler {
    constructor(name){
        this.name = name,
        this.brains = 1,
        this.isHealthy = true
    }
    hunt() {
        this.brains += 2;
    }
    eat() {
        if(this.brains > 0){
            this.brains--;
        }else{
            this.isHealthy = false;
        }
    }
}
class Wagon {
    constructor(cap) {
        this.capacity = cap
        this.passengers = []
    }
    getAvailableSeatCount() {
        
        return (this.capacity - this.passengers.length)
    }
    join(traveler){
        if (this.getAvailableSeatCount() > 0){
            this.passengers.push(traveler);
        }
    }
    shouldQuarantine() {
        for(let i = 0; this.passengers.length > i; i++){
            if(this.passengers[i].isHealthy === false){
                return true
            }
        }
        return false
    }
    totalbrains() {
        let totalbrainsNumber = 0;
        for(let i = 0; this.passengers.length > i; i++){

            totalbrainsNumber += this.passengers[i].brains;
        }
        return totalbrainsNumber;
    }
}

let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${ wagon.shouldQuarantine() } – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${ wagon.totalbrains() } – EXPECTED: 3.`)