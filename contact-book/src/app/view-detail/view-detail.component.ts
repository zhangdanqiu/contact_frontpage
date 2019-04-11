import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-view-detail',
  templateUrl: `./view-detail.component.html`,
  styleUrls: [`./view-detail.component.scss`]
})
export class ViewDetailComponent implements OnInit {

  @Input() name;

  @Output() toParent= new EventEmitter();
  private number:string;
  private callName:string;


  constructor() { }

  ngOnInit() {

  }

  makeCall(){
    this.callName=document.getElementById("detailFn").textContent;
    this.number=document.getElementById("detailPhn").textContent;
    alert("Are you going to call"+this.callName+" by "+this.number+">>")
  }

}
