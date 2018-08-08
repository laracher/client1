export class Group
{
    id: number;
    groupName: string;
    lowerLimit: number;
    upperLimit: number;

    constructor
    (
        id: number,
        groupName: string,
        lowerLimit: number,
        upperLimit: number
    ) 
    {
        this.id = id;
        this.groupName = groupName;
        this.lowerLimit = lowerLimit;
        this.upperLimit = upperLimit;
    }
}