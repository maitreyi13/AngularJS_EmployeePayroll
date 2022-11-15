import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/service/EmployeeServiceService';
import { EmployeModelModule } from 'src/app/model/employe-model.module';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  logoUrl="./assets/images/logo.png";
  image1Url="./assets/profile-images/Ellipse -1.png";
  image2Url="./assets/profile-images/Ellipse -2.png";
  image3Url="./assets/profile-images/Ellipse -3.png";
  image4Url="./assets/profile-images/Ellipse -4.png";

  employee: EmployeModelModule = new EmployeModelModule(0,"",0,"",new Date,"","","");
  employeeId: any = this.route.snapshot.paramMap.get("id")


  constructor(
    private router:Router,
    private service:EmployeeServiceService,
    private route:ActivatedRoute
    ) { }


  ngOnInit(): void {
   }
   getVal(value: String) {
    console.log(value);
    this.employee.department = value.toString();
  }
  
  onSubmit(){
    console.log(this.employee);
    this.service.insertEmployee(this.employee).subscribe( (data:any) =>{
      alert("Employee Added Successfully")
      this.router.navigate([""]);
    } )
  } 

updateEmpData(){
  if(this.employeeId!= null){
  this.getEmployee();
  this.service.updateEmployeeData(this.employee, this.employeeId).subscribe ((data:any)=>{
  this.router.navigate([""])
  })
}
}
getEmployee(){
  this.service.getEmployeeById(this.employeeId).subscribe((data:any)=>{
    this.employee=data.data;
    console.log(this.employee.employeeId);
  })
}

}