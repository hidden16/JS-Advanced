function solve(){
    const canCast = (info) => ({
        cast: (spell) => {
            console.log(`${info.name} cast ${spell}`);
            info.mana--;
        }
    })
    const canFight = (info) => ({
        fight: () => {
            console.log(`${info.name} slashes at the foe`);
            info.stamina--;
        }
    })

    const mage = (name) => {
        let info = {
            name,
            health: 100,
            mana: 100
        }
        return Object.assign(info, canCast(info));
    }
    const fighter = (name) => {
        let info = {
            name,
            health: 100,
            stamina: 100
        }
        return Object.assign(info, canFight(info));
    }
    return {mage: mage, fighter: fighter};
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
