import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // private responseData: any;

  // storageKey = 'users';

  // set users(value: any[]) {
  //   localStorage.setItem(this.storageKey, JSON.stringify(value));
  // }

  // get users(): any[] {
  //   const storedValue = localStorage.getItem(this.storageKey);
  //   if (storedValue !== null) {
  //     return JSON.parse(storedValue);
  //   } else {
  //     return [];
  //   }
  // }

  // constructor() { }

  // private responseData: any;

  // storageKey = 'users';

  // addUser(user: any) {
  //   const users = this.users;
  //   users.push(user);
  //   localStorage.setItem(this.storageKey, JSON.stringify(users));
  // }

  // get users(): any[] {
  //   const storedValue = localStorage.getItem(this.storageKey);
  //   if (storedValue !== null) {
  //     return JSON.parse(storedValue);
  //   } else {
  //     return [];
  //   }
  // }

  // constructor() { }

  private responseData: any;

  storageKey = 'users';

  addUser(user: any) {
    const storedValue = localStorage.getItem(this.storageKey);
    let users = [];
    if (storedValue !== null) {
      users = JSON.parse(storedValue);
      users.push(user);
    }
    localStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  get users(): any[] {
    const storedValue = localStorage.getItem(this.storageKey);
    if (storedValue !== null) {
      return JSON.parse(storedValue);
    } else {
      return [];
    }
  }

  constructor() { }
}
