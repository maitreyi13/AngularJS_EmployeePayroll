import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  insertEmployee(employee: any): Observable<any> {
    return this.http.post("http://localhost:8083/emp/create", employee);
  }

  getEmployeeData(): Observable<any> {
    return this.http.get("http://localhost:8083/emp/getAll");
  }

  deleteEmployeeData(id: number) {
    return this.http.delete("http://localhost:8083/emp/delete/" + id);
  }

  updateEmployeeData(employee: any, id: number) {
    return this.http.put("http://localhost:8083/emp/update/" + id, employee);
  }

  getEmployeeById(id: number) {
    return this.http.get("http://localhost:8083/emp/get/" + id);
  }

}
