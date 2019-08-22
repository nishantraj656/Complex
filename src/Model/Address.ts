export class Address
{
    public street:string;
    public city:string;
    public state:string;
    public country:string;

    constructor(street:string,city:string,state:string,country:string,street1:string)
    {
        this.street = street + street1;
        this.city = city;
        this.state = state;
        this.country = country;
    }
   
}