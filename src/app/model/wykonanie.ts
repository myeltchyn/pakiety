import { Pakiet, Uesy } from './pakiet';

export class Wykonanie {
   
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
