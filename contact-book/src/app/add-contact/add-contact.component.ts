import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";




@Component({
  selector: 'app-add-contact',
  templateUrl: `./add-contact.component.html`,
  styleUrls: [`./add-contact.component.scss`]
})


export class AddContactComponent implements OnInit {

  private newLastName: string ;
  private newFirstName: string ;
  private newPhoneNum: string  ;
  private newEmail: string ;


  constructor(private http :HttpClient ) {

  }

  ngOnInit() {

  }

  creatContact(){
    //get the elements from input
    this.newLastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    this.newFirstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    this.newPhoneNum = (<HTMLInputElement>document.getElementById("phoneNum")).value;
    this.newEmail = (<HTMLInputElement>document.getElementById("email")).value;

    this.http.post('http://localhost:3000/Contacts',
      {
        'LastName':this.newLastName,
        'FirstName':this.newFirstName,
        'Phone_Number':this.newPhoneNum,
        'Email_Addr':this.newEmail,
      },{
      headers: new HttpHeaders({'Content-Type':'application/json'})
      }).subscribe((data:any)=>{
      console.log(data);
    });
}
}
