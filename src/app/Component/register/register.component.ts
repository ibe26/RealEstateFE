import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import alertify from 'alertifyjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from 'src/app/Model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule, MatFormFieldModule]
})
export class RegisterComponent {
  private formBuilder=inject(FormBuilder);
  private router=inject(Router);
  private userService=inject(UserService);

  public RegisterForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required,Validators.email]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  public onSubmit() {
    if (this.RegisterForm.valid) {
      this.userService.register(this.RegisterForm.value).subscribe({next:(data:User)=> {
        if (data) {
          alertify.success("Successfully registered!");
          this.router.navigate(['/login']);
        }
      }, error:error => {
        if (error.status === 400) {
          alertify.error("User already exists!");
        }
      }
        })
    }
    else alertify.error("Please provide needed informations.");


  }
}