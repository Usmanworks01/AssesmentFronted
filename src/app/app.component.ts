import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from './services/api.service';
import { ErrorService } from './services/error.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: any = 'Meeting Protocol Assessment';
  createUser: FormGroup | any;
  title = 'angular_form_usman';
  constructor(private fb: FormBuilder, private apiService: ApiService, private errorService: ErrorService, private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.createUser = this.fb.group({
      first_name: [null, [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      last_name: [null, [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      email: [null, [Validators.required,Validators.email]],
      address: [null, [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      dob: [null, [Validators.required]],
      country: ['newyork', [Validators.required]],
      gender: ["M", [Validators.required]],
    })
  }
 get UC(){
  return this.createUser.controls;
 }
  onSubmit() {
    this.spinner.show();
    this.apiService.postUser(this.createUser.value).subscribe(
    (res:any)=>{
    this.spinner.hide();
      this.errorService.selfMessage('success', 'User form', 'User form submitted successfully!')
    },(errorResponse)=>{
    this.spinner.hide();
      this.errorService.throwError(errorResponse);
    })
  }
}

