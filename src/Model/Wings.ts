export class Wings
{
    public label:string;
    public floor:number;
    public start:number;
    public end:number;

    constructor(label:string,floor:string,start:string,end:string)
    {
        this.label = label;
        this.floor = <number> <any>floor;
        this.start = <number> <any>start;
        this.end = <number> <any>end;
    }
   
}