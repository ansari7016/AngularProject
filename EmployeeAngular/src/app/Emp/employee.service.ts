import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private myHttp:HttpClient) { }
  employeeUrl:string = "http://localhost:5039/api/Employees";
  listEmployee:Employee[] = []; //For Fetch Data
  empObject:Employee = new Employee(); //For Save Data

  saveEmp()
  {
    return this.myHttp.post(this.employeeUrl, this.empObject);
  }
  updateEmp()
  {
    return this.myHttp.put(`${this.employeeUrl}/${this.empObject.id}`, this.empObject);
  }
  deleteEmp(id:number)
  {
    return this.myHttp.delete(`${this.employeeUrl}/${id}`);
  }
  getEmp():Observable<Employee[]>
  {
    return this.myHttp.get<Employee[]>(this.employeeUrl);
  }
}
