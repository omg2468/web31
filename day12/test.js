let weapon = {
    type: 'orc',
    speed: 5,
    damage: 100,
}

let character = {
    weapon: 'gun',
    name: 'Tazz',
    level: 10,
    attack(){
        console.log(this.weapon)
    },
    changeWeapon(){
        this.weapon = 'nothing'
        console.log(this.weapon);
    }
}

console.log(weapon)
console.log(character.changeWeapon());
console.log(character);