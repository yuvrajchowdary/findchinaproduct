import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  searchtxt = '';
  resulttxt = '';

  list: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  search() {
    this.resulttxt = 'match found';
    this.http.get(`https://fakepizzarestapi.herokuapp.com/china?q=${this.searchtxt}`).subscribe(
      (result: any[]) => {
        this.list = result;
      },
      (err) => {}
    );
  }
}
