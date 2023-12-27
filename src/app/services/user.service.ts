import { Injectable } from '@angular/core';
import { Subject, Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedSubject = new Subject<boolean>();
  logged = false;

  constructor() { 
  }
  
  getLogged() {
    console.log(this.logged)
    return this.logged;
  }

  changeLogged() {
    this.logged = true;
    this.loggedSubject.next(this.logged);
  }

  obterVariavellogged(): Observable<boolean> {
    return this.loggedSubject.asObservable();
  }
}
