import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  private signInDataSubject: BehaviorSubject<FormGroup | null> = new BehaviorSubject<FormGroup | null>(null);

  constructor() { }

  setSignInData(data: FormGroup) {
    this.signInDataSubject.next(data);
  }

  getSignInData() {
    return this.signInDataSubject.asObservable();
  }
}
