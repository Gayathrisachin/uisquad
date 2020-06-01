import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/user';
import { Fake } from '../models/fake.model';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FakeService {
    url:string='http://localhost:3000/Fake'
    constructor(private http:HttpClient){}
    getAll(){
        return this.http.get<Fake[]>(this.url)
    }
    postAll(data:any){
        return this.http.post<Fake[]>(this.url,data)
    }
    throwUp(value: boolean): Observable<boolean> {
        return throwError(new Error('COULD NOT UPDATE FAM!'));
    }
}
