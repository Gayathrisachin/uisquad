import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { FakeService } from '../services/fake.service';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import { Fake } from '../models/fake.model';
export class Fake{
  id:number
  todaysDateTime:string
}
@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent implements OnInit {
  // id:number
  today= new Date();
 
  public hide:boolean=false

  isChecked:boolean=false
  
  users:Fake[]
  
  formGroup:FormGroup

  todaysDateTime:boolean
  // todaysTime:boolean
  constructor(private router:Router,private fakeService:FakeService,private formBuilder:FormBuilder ) {
   this.formGroup=this.formBuilder.group({
     id:'',
     todaysDateTime:'',
    //  todaysTime:''
   })
    
   }

  ngOnInit(): void {
 
  }
  onClick(){

    this.router.navigateByUrl('/schedule');
  }
 
  onToggleChange(e){
   this.formGroup.setValue({
    id:'',
    todaysDateTime:this.today,
    // todaysTime:''
   })
    // alert(JSON.stringify(this.formGroup.value, null, 2));
    this.fakeService.postAll(this.formGroup.value).subscribe(data=>{
     alert('you are in')
     this.router.navigate(['/log'])
     e.preventDefault();
    })
    
       
  }

 punchOut(){
  this.hide=!this.hide
 }
 

}


