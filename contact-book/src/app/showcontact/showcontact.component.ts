import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AddContactComponent } from "../add-contact/add-contact.component";
import { HttpClient } from "@angular/common/http";




@Component({
  selector: 'app-showcontact',
  templateUrl: `./showcontact.component.html`,
  styleUrls: [`./showcontact.component.scss`]
})
export class ShowcontactComponent implements OnInit {

  @Input() addContact: AddContactComponent;
  @Input() getDataFromChild;
  @Output() toParent2= new EventEmitter();





  form :HTMLElement;
  private contacts ;
  private detailList: string[]=[];


  constructor(private http:HttpClient) {
  }

  ngOnInit() {
    //get contact list when open the app
    this.http.get('http://localhost:3000/Contacts').subscribe((response) =>{

      this.contacts = response;

      for(let i=0;i<this.contacts.length;i++){
        this.detailList.push(this.contacts[i]);
        // console.log(this.detailList[i]);

      }
    })
  }



  showDetail(event) {
    let tar = event.target.textContent.toString();
    console.log(tar);
//get the name user click
    for (let i = 0; i < this.detailList.length; i++) {
      //I don't know why there is a space in the "tar"..so I add a space before the detail
      const detail = " "+this.contacts[i].FirstName.toString();
//get the contact
      if (detail == tar ) {
        console.log(detail);
        console.log(this.contacts[i]);
        //send to parent component
        const showD =this.contacts[i];
        this.getDataFromChild(showD);
        this.toParent2.emit(showD);
        break;
      }
    }
  }

//click button to show the div for new contact
  buttonClick(){
    this.form = document.querySelector('#new_contact');
    this.form.style.display = "block";
  }
}

