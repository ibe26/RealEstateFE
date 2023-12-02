import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import alertify from 'alertifyjs';
import { LocalStorageHelper } from 'src/app/API';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports: [FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule, MatFormFieldModule]
})
export class LoginComponent {
  
  private formBuilder=inject(FormBuilder);
  private userService=inject(UserService);
  private router=inject(Router);

  public UserForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  public onSubmit() {
    if (this.UserForm.valid) {
      this.userService.login(this.UserForm.value).subscribe(data => {
        localStorage.setItem(LocalStorageHelper.tokenKey, data.token);
        this.router.navigate(['main-page']);
      })
    }
    else alertify.error("Please provide needed informations.");


  }
}
