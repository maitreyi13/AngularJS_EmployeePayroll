import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeModelModule } from 'src/app/model/employe-model.module';
import { EmployeeServiceService } from 'src/app/service/EmployeeServiceService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logoUrl="./assets/images/logo.png";
  addUrl="./assets/icons/add-24px.svg";
  deleteUrl="./assets/icons/delete-black-18dp.svg";
  editUrl="./assets/icons/create-black-18dp.svg";
 
  public employeeDetails: EmployeModelModule[] = [];
  
  constructor(    
    private service:EmployeeServiceService,
    private router:Router,

    ) { }

  ngOnInit(): void {
    this.service.getEmployeeData().subscribe( (data: { data: EmployeModelModule[]; }) =>{
      this.employeeDetails= data.data;
      console.log(this.employeeDetails);
    });
  }

  remove(employeeId:number):void{
    this.service.deleteEmployeeData(employeeId).subscribe((data:any) =>{
      this.employeeDetails=data.data;
      alert("Deleted Successfully");
      this.ngOnInit();
    });
  }

  update(employeeId:number):void{
    this.router.navigate(['update',employeeId]);
  }


}