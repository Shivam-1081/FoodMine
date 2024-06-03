import { CartItem } from "./CartItem";
import { LatLng } from "leaflet";

export class Order{
    id!:number;
    items!:CartItem[]
    totalPrice!:number;
    name!:String;
    address!:String;
    addressLatLng?:LatLng;
    paymentId!:String;
    createdAt!:string;
    status!:string;

}