import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { getRouteParams } from 'src/app/helpers/get-route-params'
// import { ActivatedRoute } from '@angular/router'

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

  public id = getRouteParams('id')
  
  constructor (
    private formBuilder: FormBuilder,
    // private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    console.log(this.form.value.email)
    console.log(this.form.value.teste)

    console.log('ID', this.id)
  }
}
