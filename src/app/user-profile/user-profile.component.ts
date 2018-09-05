import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  search : string;
  searchCountrytext: any =[];
  countryWeather:string;
  counts: any=[];
  jsonValue:any = {
    "countryWeather": this.countryWeather,
    "count": this.counts
  }
  @Output() notifyParent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    let countLength = this.counts.length; 
    this.counts = [...this.counts,countLength + 1];
    this.countryWeather = this.search;
    this.search = '';
  }
}
