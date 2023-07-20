import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postingUsers(body: any): Observable<any> {
    return this.http.post<any>(environment.posting_Users, body);
  }

  // http://localhost:3000/api/empty_bag_app/time-monitoring/check-users-exist-or-not?reg_no=122&f_name=shilpa&dept=software&staff_student=staff

  checkingUsers(reg_no: string, f_name: string, dept: string, staff_student: string): Observable<any> {

    return this.http.get<any>(`${environment.check_Users}?reg_no=${reg_no}&f_name=${f_name}&dept=${dept}&staff_student=${staff_student}`);
  }
  
}


