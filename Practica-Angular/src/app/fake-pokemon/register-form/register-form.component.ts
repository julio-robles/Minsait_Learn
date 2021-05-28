import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { pokemonRegister } from '../pokemonRegister.interface';
import { compareTypes } from './type2-validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class SignupFormComponent implements OnInit {
	// Incialización del formulario
  	public userRegisterForm: FormGroup = null;
	// variable submitted a false
	public submitted: boolean = false;

	typeList1: string[] = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'ground', 'flying', 'ghost', 'rock', 'fighting', 'poison', 'psychic', 'bug', 'dark', 'steel', 'dragon', 'fairy'];
	typeList2: string[] = ['', 'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'ground', 'flying', 'ghost', 'rock', 'fighting', 'poison', 'psychic', 'bug', 'dark', 'steel', 'dragon', 'fairy'];


	// Inicializamos FormBuilder en el constructor
	constructor(private formBuilder: FormBuilder) {
	   // Nuestro formulario - sin campos por defecto
		 // Podemos meter valores por defecto en las comillas
	    this.userRegisterForm = this.formBuilder.group({
	     	name: ['', [Validators.required, Validators.maxLength(20)]],
			frontImage: ['', [Validators.required, Validators.maxLength(200)]],
			backImage: ['', [Validators.required, Validators.maxLength(200)]],
			type1: ['', [Validators.required]],
			type2: ['']
	    },
		{
		  // Validación custom de password
		  validator: compareTypes('type1', 'type2')
		});
	 }
	
	// El OnInit -> Vacío
	ngOnInit() {/* Empty */}
	
	//Función accionada al clickar en submit
	public onSubmit(): void {
	    // El usuario ha pulsado en submit->cambia a true submitted
	    this.submitted = true;
			// Si el formulario es valido
	    if (this.userRegisterForm.valid) {
	      // Creamos un Usuario y lo emitimos
		  	let types: string[] = [];
			types.push(this.userRegisterForm.get('type1').value);
			let type2 = this.userRegisterForm.get('type2').value;
			if (type2 != '') 
				types.push(type2);
			const pokemon: pokemonRegister = {
				name: this.userRegisterForm.get('name').value,
				frontImage: this.userRegisterForm.get('frontImage').value,
				backImage: this.userRegisterForm.get('backImage').value,
				types: types,
			};
				console.log(pokemon);
	      // Reseteamos todos los campos y el indicador de envío o submitted
	      this.userRegisterForm.reset();
	      this.submitted = false;
	    }
	  }
}