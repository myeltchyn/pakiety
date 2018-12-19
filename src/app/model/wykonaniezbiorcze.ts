import { Uesy, Pakiet } from './pakiet';

export class Wykonaniezbiorcze {
        public nazwapakietu:string;
        public idwykonania:number;
        public zatwprzezias:boolean;
        public liczbaok:string;
        public osobazatwierdzajaca:string;
        public datawydania:Date;
        public wykonacdo:Date;
        public idpakietu:number;
    constructor (attrs: Partial<Wykonaniezbiorcze> = {}){
        this.nazwapakietu=attrs.nazwapakietu;
        this.idwykonania=attrs.idwykonania;
        this.zatwprzezias=attrs.zatwprzezias;
        this.liczbaok=attrs.liczbaok;
        this.osobazatwierdzajaca=attrs.osobazatwierdzajaca;
        this.datawydania=attrs.datawydania;
        this.wykonacdo=attrs.wykonacdo;
        this.idpakietu=attrs.idpakietu;
    }
}
