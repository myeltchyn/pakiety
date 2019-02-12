import { Uesy, Pakiet } from './pakiet';
import { Wykonanie } from './wykonanie';

export interface Wykonaniezbiorcze extends Pakiet,Wykonanie {
    //nazwa:string;
    //idwykonania:number;
    //zatwprzezias:boolean;
    liczbaok:number;
    //osobazatwierdzajaca:string;
    //dataWydania:Date;
    //terminWykonania:Date;
    //idpakietu:number;
}

/*export class Wykonaniezbiorcze {
        public nazwa:string;
        public idwykonania:number;
        public zatwprzezias:boolean;
        public liczbaok:string;
        public osobazatwierdzajaca:string;
        public dataWydania:Date;
        public terminWykonania:Date;
        public idpakietu:number;
    constructor (attrs: Partial<Wykonaniezbiorcze> = {}){
        this.nazwa=attrs.nazwa;
        this.idwykonania=attrs.idwykonania;
        this.zatwprzezias=attrs.zatwprzezias;
        this.liczbaok=attrs.liczbaok;
        this.osobazatwierdzajaca=attrs.osobazatwierdzajaca;
        this.dataWydania=attrs.dataWydania;
        this.terminWykonania=attrs.terminWykonania;
        this.idpakietu=attrs.idpakietu;
    }
}
*/