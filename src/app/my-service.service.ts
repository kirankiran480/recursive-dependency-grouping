import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyServiceService {

constructor(private httpService: HttpClient) { }

getData(){
   return this.httpService.get('../assets/data.json');
}
}
