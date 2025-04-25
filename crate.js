

function SpawnCreate(rarity, cooldown, tries)
{
    return { //Returns a struct of the crate
        rarity: rarity,
        cooldown: cooldown,
        tries: tries,
        lastopened: null,
    };
}

const crate_1 = SpawnCreate(2, 4, 3)
