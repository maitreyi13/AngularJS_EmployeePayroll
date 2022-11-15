
export class EmployeModelModule {
  employeeId : number;
  name : String = "";
  salary : number = 0;
  note : String = "";
  startDate : Date ;
  department : String = "";
  gender : String = "";
  profilePic : String = "";

  constructor(employeeId:number,name:String,salary:number,note:String,startDate:Date,department:String,gender:String,profilePic:String){
      this.employeeId = employeeId;
      this.name = name;
      this.salary = salary;
      this.note = note;
      this.startDate = startDate;
      this.department = department;
      this.gender = gender;
      this.profilePic = profilePic;
  }
}
