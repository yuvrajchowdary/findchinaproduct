import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string = "explorecontant";
  searchtxt = '';
  resulttxt = '';

  list: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  search() {
    this.resulttxt="match found"
    this.http.get(`https://fakepizzarestapi.herokuapp.com/china?q=${this.searchtxt}`)
    .subscribe( (result: any[]) => {
         debugger;
         this.list = result;
    }, err => {

    });

  }

}
