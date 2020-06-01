import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Fake } from '../models/fake.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeService } from '../services/fake.service';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {
//   @Output() changed = new EventEmitter<boolean>();
 
//   public hide:boolean=false
// checked:boolean=true
//   today= new Date();
//   users:Fake[]
  
//   formGroup: FormGroup;
//   todaysDateTime: string;
  constructor(private router:Router,private fakeService:FakeService,private formBuilder:FormBuilder) {
  //   this.formGroup = formBuilder.group({
  //     id:'',
  //     todaysDateTime:'',
  //     todaysTime:''
    
  //   });
  
    }

  ngOnInit() {
  }

  
}
