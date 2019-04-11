

export class Contact{
  id:Number;
  LastName: String;
  FirstName: String;
  PhoneNumber: String;
  Email: String;

  constructor(LastName:String,FirstName: String,PhoneNumber: String,Email: String){
    this.LastName = LastName;
    this.FirstName=FirstName;
    this.PhoneNumber = PhoneNumber;
    this.Email=Email;
  }
}
