import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Contact-Book';
  public showContact;
  // public test:string= "your name~";

  getDataFromChild (childData){
    document.getElementById("makeCall").style.display='block';
    document.getElementById("sendMail").style.display='block';
    console.log(childData);
    // alert(childData.FirstName);
    let fName= childData.FirstName;
    let lName = childData.LastName;
    let pNum = childData.Phone_Number;
    let eml  = childData.Email_Addr;
    document.getElementById("detailFn").innerText=fName;
    document.getElementById("detailLn").innerText=lName;
    document.getElementById("detailPhn").innerText=pNum;
    document.getElementById("detailEml").innerText=eml;
    this.showContact = childData;


  }




}

