import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  mainUrl:any 
  constructor(private http : HttpClient ) {
    this.mainUrl = 'http://localhost:5172'
   }

   async getAllData() {
    const endpoint = '/a'; // Example endpoint
    const resp = await this.http.get<any>(this.mainUrl + endpoint).toPromise().then(res => {
        console.log('Response:', res);
        return res;
    }).catch(error => {
        console.error('Error:', error);
        throw error; // Re-throw the error to handle it in the caller function
    });

    console.log('Data:', resp);
    return resp;
}
}
