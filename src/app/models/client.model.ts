export class User 
{
    id: number;
    firstName: string;
    dob: Date;
    riskGroup: string;
    pasportNumber: number;

    constructor
    (
      id: number,
      firstName: string,
      dob: Date,
      riskGroup: string,
      pasportNumber: number
    ) 
    {
      this.id = id;
      this.firstName=  firstName;
      this.dob = dob;
      this.riskGroup = riskGroup;
      this.pasportNumber = pasportNumber;
    }
  }