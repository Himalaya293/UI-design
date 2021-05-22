import { Lookup } from './lookup';
export interface IProduct{
    id:number;
    name:string;
    code:string;
}
export class Product {
    id:number;
    name:string;
    code:string;
    constructor(name?:string,code?:string){
        this.name = name;
        this.code = code;
    }
}
