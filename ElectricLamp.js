class ElectricLamp {
    status;

    constructor(status) {
        this.status = status;
    }
    getStatus(){
        return this.status;
    }
}

let lamp1 = new ElectricLamp (false);