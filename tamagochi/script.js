class Pet {
    constructor(name, animalType, ) {
        this.name = name;
        this.animalType = animalType;


        this.energy = 50;
        this.happiness = 50;
        this.fullness = 50;
    }

    nap() {
        this.energy = Math.min(100, this.energy + 40);
        this.happiness = Math.max(0, this.happiness - 10);
        this.fullness = Math.max(0, this.fullness - 10);
        return `${this.name} Took a nap!`;
    }

    play() {
        this.happiness = Math.min(100, this.happiness + 30);
        this.fullness = Math.max(0, this.fullness - 10);
        this.energy = Math.max(0, this.energy - 10);
        return `You played with ${this.name}!`;
    }

    eat(){
        this.fullness = Math.min(100, this.fullness + 30);
        this.happiness = Math.min(100, this.happiness + 5);
        this.energy = Math.max(0, this.energy - 15);
        return `You fed ${this.name}!`;
    }
}
let currentPet = null;

function updateStats() {
    if (currentPet){
        document.getElementById('energy-value').textContent = currentPet.energy;
        document.getElementById('fullness-value').textContent = currentPet.fullness;
        document.getElementById('happiness-value').textContent = currentPet.happiness;

        document.getElementById('energy-bar').style.width = `${currentPet.energy}%`;
        document.getElementById('fullness-bar').style.width = `${currentPet.fullness}%`;
        document.getElementById('happiness-bar').style.width = `${currentPet.happiness}%`;
    }
}

function addToHistory(message){
    const eventList = document.getElementById('event-list');
    const newEvent = document.createElement('li');
    newEvent.textContent = message;
    eventList.appendChild(newEvent);
    eventList.scrollTop = eventList.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
    const summonButton = document.querySelector('.input-container button');

    summonButton.addEventListener('click', () => { 
        const petName = document.getElementById('inputField').value;
        const petType = document.getElementById('pets').value;
        if (petName) {
            
            currentPet = new Pet(petName, petType);
            
            
            document.getElementById('pet-name').textContent = currentPet.name;
            document.getElementById('pet-type').textContent = currentPet.animalType;

            document.getElementById('pet-image').src = `${petType}.png`;
            document.querySelector('.pet-display').classList.remove('hidden');
            document.querySelector('.pet-stats').classList.remove('hidden');
            updateStats();
            addToHistory(`You summoned a ${petType} named ${petName}!`);


        } else {
            alert('Please enter a name for your pet!');
        }
     });
    
     document.getElementById('play').addEventListener('click', () => {
        if (currentPet) {
            const message = currentPet.play();
            addToHistory(message);
            updateStats();
            
        }
    
        

});

document.getElementById('nap').addEventListener('click', () => {
    if (currentPet) {
        const message = currentPet.nap();
        addToHistory(message);
        updateStats();
        
    }

});     

document.getElementById('feed').addEventListener('click', () => {
    if (currentPet) {
        const message = currentPet.eat();
        addToHistory(message);
        updateStats();
    }
});


});
