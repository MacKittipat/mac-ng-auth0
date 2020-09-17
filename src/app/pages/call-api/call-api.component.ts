import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css']
})
export class CallApiComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(`${environment.apiBaseUrl}/private/greeting`, {responseType: 'text'}).subscribe(response => {
      console.log('Private = ' + response);
    });

    this.http.get(`${environment.apiBaseUrl}/public/hello`, {responseType: 'text'}).subscribe(response => {
      console.log('Public = ' + response);
    });
  }

}
