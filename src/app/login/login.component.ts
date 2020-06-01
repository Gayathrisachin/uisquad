import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted  =  false;
    // invalidLogin: boolean = false;
  constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private authService : AuthenticationService,
  // private toastr: ToastrService
  ) { }
   
  ngOnInit() {
    this.authForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
 
}
get formControls() {
  return this.authForm.controls; }
logIn(){
  
this.isSubmitted = true;
    if(this.authForm.invalid){
      return;
    }
    if(this.authForm.controls.email.value == 'gayatri@gmail.com' && this.authForm.controls.password.value == 'password') {
    // this.authService.logIn(this.authForm.value);
    this.router.navigateByUrl('/mark-attendance');
}
else {
  return
}
}
}