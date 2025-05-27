import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'admin-component',
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [
      CommonModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule
    ],
    standalone: true
})
export class AdminComponent {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      companyName: [''],
      contactName: [''],
      phoneNumber: [''],
      url: ['']
    });
  }
}