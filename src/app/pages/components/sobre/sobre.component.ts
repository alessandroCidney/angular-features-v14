import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  public form = this.formBuilder.group({
    email: ['teste@thisisanexample.com'],
    password: [''],
    teste: ['teste'],
  })
  
  constructor (
    private formBuilder: FormBuilder
  ) {}
  
  ngOnInit(): void {
    console.log(this.form.value.email)
    console.log(this.form.value.teste)
  }
}
