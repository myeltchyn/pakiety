import { Wykonanie } from './wykonanie';

export enum Zatwierdzono {
    TAK = 1,
    NIE = 2
}

export enum Uesy {
    US2804 = 2804,
    US2805 = 2805,
    US2806 = 2806
}

export interface pakiet {
    id: number,
    nazwa: string,
    dataWydania: Date,
    terminWykonania: Date,
    wymaganyZalacznik: boolean,
    dotUS: string[],
    opis?: string,
<<<<<<< HEAD
    osobazatwierdzajaca:string,
    zatwprzezias:boolean
=======
    zatwierdzil?:string,
    wykonanie:Wykonanie[]
>>>>>>> e18bf8680fb764e5ca7e013214cb27241c4eeb6d
}

export class Pakiet implements pakiet {
    public id: number;
    public nazwa: string;
    public dataWydania: Date;
    public terminWykonania: Date;
    public wymaganyZalacznik: boolean;
    public dotUS: string[];
    public opis?: string;
<<<<<<< HEAD
    public osobazatwierdzajaca:string;
    public zatwprzezias:boolean
=======
    public zatwierdzil?:string;
    public wykonanie:Wykonanie[]
>>>>>>> e18bf8680fb764e5ca7e013214cb27241c4eeb6d
    
    constructor(attrs: Partial<pakiet> = {}) {
        this.id = attrs.id;
        this.nazwa = attrs.nazwa;
        this.dataWydania = attrs.dataWydania;
        this.terminWykonania = attrs.terminWykonania;
        this.wymaganyZalacznik = attrs.wymaganyZalacznik;
        this.dotUS = attrs.dotUS;
        this.opis = attrs.opis;
<<<<<<< HEAD
        this.osobazatwierdzajaca=attrs.osobazatwierdzajaca;
        this.zatwprzezias=attrs.zatwprzezias;
=======
        this.zatwierdzil=attrs.zatwierdzil;
        this.wykonanie=attrs.wykonanie;
>>>>>>> e18bf8680fb764e5ca7e013214cb27241c4eeb6d
        
    }}
