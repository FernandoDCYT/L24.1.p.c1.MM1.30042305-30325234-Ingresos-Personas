export default class Cl_ingreso{
    constructor(){
        this.menor=9999;
        this.contPersonas=0;
        this.acumIngreso=0;
    }
    procesarPersonas(p){
        this.contPersonas++;
        this.acumIngreso+= p.ingreso;
        if(p.ingreso < this.menor){
            this.menor = p.ingreso; 
        }
    }
    calcProm(){
        return this.acumIngreso/this.contPersonas;
    }
} 