import { Address } from "./address";
import { Wings } from "./Wings";
import { Facility } from "./Facility";

export class ComplexDetails
{
    public name:string;
    public websiteUrl?:string;
    public imageUrls?:string[];
    public phones:string[];
    public emailIds?:string[];
    public address:Address;
    public registrationNo?:string;
    public wings?:Wings[];
    public noOfGate?:string;
    public facility?:Facility[];
    public partyHalls?:any[];

    constructor(name:string,phone:string[],address:Address,websiteUrl?:string,image?:string[],email?:string[],reg?:string,
        wings?:Wings[],gate?:string,party?:any[],facility?:Facility[])
    {
        this.name = name;
        this.websiteUrl =websiteUrl; 
        this.imageUrls = image;
        this.phones = phone;
        this.emailIds =email;
        this.address = address;
        this.registrationNo = reg;
        this.wings = wings;
        this.registrationNo = reg;
        this.wings = wings;
        this.noOfGate = gate;
        this.facility = facility;
        this.partyHalls = party;
    }
}
/**
{
	"name" : "Complex222",
	"websiteUrl" : "https://complex.com",
	"imageUrls" : ["http://imageUrl1.com","http://imageUrl2.com"],
	"phones" : ["0802564768"],
	"emailIds" : ["something@emailId.com"],
     "address" : {
         "city" : "Bangalore",
          "state" : "karnataka",
          "area" : "area",
          "street" : "street"
     },
     "registrationNo" : "12345rt",
     "wings" : [{
     	    "label" : "A",
     	    "floor" : 4,
     	     "start" : 101,
     	     "end" : 110
        }
     ],
     "noOfGate" : 4,
     "facility" : [
          {
          	 "count" : 4,
          	  "ftype" : 2
          }
     ],
	
     "partyHalls" : [
          {
          	 "hallName" : "HallName"
          }
     ]
	
} */