import { Pakiet, Uesy } from './pakiet';

export class Wykonanie {
<<<<<<< HEAD
   
        public id:number;
        public pakietyId:number;
        public dataWykonania:Date;
        public dataZamieszczenia:Date;
        public zalacznik:boolean;
        public us:Uesy;
        public zamiescil:string;
        public status:string;
        public uwagi?:string;
        //public zalacznikUrl?:string,
        public wykonal?:string;
=======
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
>>>>>>> e18bf8680fb764e5ca7e013214cb27241c4eeb6d
        
   constructor (attrs: Partial<Wykonanie>={}){
       this.id=attrs.id;
       this.pakietyId=attrs.pakietyId;
       this.dataWykonania=attrs.dataWykonania;
       this.dataZamieszczenia=attrs.dataZamieszczenia;
       this.zalacznik=attrs.zalacznik;
       this.us=attrs.us;
       this.zamiescil=attrs.zamiescil;
       this.uwagi=attrs.uwagi;
       this.wykonal=attrs.wykonal;
       this.status=attrs.status;
   }
}
