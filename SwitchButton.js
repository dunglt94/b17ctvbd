class SwitchButton{
    lamp; status;

    constructor(lamp, status) {
        this.status = status;
        this.lamp = lamp;
    }

    getLamp(){
        return this.lamp;
    }
    setLamp(lamp){
        this.lamp = lamp;
    }
    connectToLamp(ElectricLamp){
        return this.lamp = ElectricLamp;
    }
    switchOff(){
        this.lamp.status = false;
        return this.status = false;
    }
    switchOn(){
        this.lamp.status = true;
        return this.status = true;
    }
}

let switch1 = new SwitchButton(lamp1,false);
