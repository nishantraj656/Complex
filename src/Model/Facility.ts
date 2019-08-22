export class Facility 
{
    public count:number;
    public ftype:number;
    constructor(count:any,ftype:any)
    {
        this.count =<number>count;
        this.ftype =<number>ftype;
    }
}