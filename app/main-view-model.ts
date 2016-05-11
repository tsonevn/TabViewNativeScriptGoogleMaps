import observable = require("data/observable");

export class HelloWorldModel extends observable.Observable {

    

    constructor() {
        super();
        this.set("latitude", -33.86);
        this.set("longitude", 151.20);
        this.set("zoom", 8);
        this.set("bearing", 0);
        this.set("tilt", 0);
        this.set("padding", [40, 40, 40, 40]);
        
    }

  
}