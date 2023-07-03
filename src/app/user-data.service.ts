import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userDataKey = 'userData';

  saveUserData(data: any) {
    const existingData = this.getUserData();
    const updatedData = existingData ? [...existingData, data] : [data];
    localStorage.setItem(this.userDataKey, JSON.stringify(updatedData));
  }

  getUserData(): any[] {
    const userDataString = localStorage.getItem(this.userDataKey);
    return userDataString ? JSON.parse(userDataString) : [];
  }
}
