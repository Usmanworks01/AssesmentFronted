import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = `http://localhost:8000`;
  constructor(private http: HttpClient) { }

  public postUser(formData: FormData){
    const url = `${this.baseUrl}/api/create-user`;
    return this.http.post(url, formData);
  }
}
