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
    zatwierdzil?:string,
    wykonanie:Wykonanie[]
}

export class Pakiet implements pakiet {
    public id: number;
    public nazwa: string;
    public dataWydania: Date;
    public terminWykonania: Date;
    public wymaganyZalacznik: boolean;
    public dotUS: string[];
    public opis?: string;
    public zatwierdzil?:string;
    public wykonanie:Wykonanie[]
    
    constructor(attrs: Partial<pakiet> = {}) {
        this.id = attrs.id;
        this.nazwa = attrs.nazwa;
        this.dataWydania = attrs.dataWydania;
        this.terminWykonania = attrs.terminWykonania;
        this.wymaganyZalacznik = attrs.wymaganyZalacznik;
        this.dotUS = attrs.dotUS;
        this.opis = attrs.opis;
        this.zatwierdzil=attrs.zatwierdzil;
        this.wykonanie=attrs.wykonanie;
        
    }}
