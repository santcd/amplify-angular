import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CognitoService } from '../cognito.service';

@Component({
  selector: 'app-manually-login',
  templateUrl: './manually-login.component.html',
  styleUrls: ['./manually-login.component.css'],
})
export class ManuallyLoginComponent implements OnInit {
  userForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private cognitoService: CognitoService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async signup() {
    try {
      console.log(this.userForm.value);
      
      await this.cognitoService.signUp(
        this.userForm.get('username')?.value,
        this.userForm.get('password')?.value
      );
    } catch (e) {
      console.log(e);
    }
  }
}
