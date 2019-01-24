import { Pakiet, Uesy } from './pakiet';

export class Wykonanie {
    constructor (
        public idwykonania:number,
        public status:boolean,
        public dataWykonania:Date,
        public dataZamieszczenia:Date,
        public zamiescil:string,
        public us:Uesy,
        public pakietyId?:number,
        public uwagi?:string,
        public zalacznikUrl?:string,
        public wykonal?:string,
        
    ){}
}
