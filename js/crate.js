import { time } from "./clock.js";

let time = gettime();

class Crate
{

    constructor(crate)
    {
        this.crate = crate;
        this.createcrate();
        this.opencrate(crate);
    }
    createcrate()
    {
    }

    opencrate()
    {
    }

}

let crate = new Crate("crate");


