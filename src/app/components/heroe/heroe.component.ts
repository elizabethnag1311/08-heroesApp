import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroeForm!: FormGroup

  constructor( private fb: FormBuilder) { 

    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.heroeForm = this.fb.group({
      nombre: ['', Validators.required],
      poder: [''],
      vivo: [''],
      tools: ['']
    })
  }

}
