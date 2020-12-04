import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  URL = `http://${environment.BACKEND_ADDRESS}:${environment.BACKEND_PORT}/api/create`

  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Referrer-Policy': 'no-referrer'
    })
  };
  
  constructor(private http: HttpClient) { }
  message = new FormControl('');
  success = -1;
  ngOnInit(): void {
  }
  async submit() {
    this.http.post(this.URL, {
      message: this.message.value
    }, this.httpOptions).toPromise().then(()=>{
      this.success = 1;
    }).catch(
      ()=> {
        this.success = 0;
      }
    )
  }
}
