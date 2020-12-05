import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
    })
  };
  message;

  constructor(private http: HttpClient) { }
  feedbacks;
  URL = `http://${environment.BACKEND_ADDRESS}:${environment.BACKEND_PORT}/api/get`
  HELLOURL = `http://${environment.BACKEND_ADDRESS}:${environment.BACKEND_PORT}/`
  ngOnInit(): void {
    this.http.get(this.HELLOURL, this.httpOptions).toPromise().then(
      (res) => {
        this.message = res ;}
    );
    this.http.get(this.URL, this.httpOptions).toPromise().then(
      (res) => {
        this.feedbacks = res["feedbacks"] ;}
    );
  }

}
