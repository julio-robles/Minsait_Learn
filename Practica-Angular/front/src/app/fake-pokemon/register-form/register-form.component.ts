import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, ViewRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fakePokemon } from '../fake-pokemon.interface';
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
			frontImage: ['', [Validators.required, Validators.maxLength(1000)]],
			backImage: ['', [Validators.required, Validators.maxLength(1000)]],
			type1: ['', [Validators.required]],
			type2: ['']
	    },
		{
		  // Validación custom de password
		  validator: compareTypes('type1', 'type2')
		});
	 }
	
	// El OnInit -> Vacío
	async ngOnInit() {}
	
	//Función accionada al clickar en submit
	public async onSubmit(): Promise<void> {
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
			const pokemon: fakePokemon = {
				name: this.userRegisterForm.get('name').value,
				frontImage: this.userRegisterForm.get('frontImage').value,
				backImage: this.userRegisterForm.get('backImage').value,
				types: types,
			};
			await fetch("http://localhost:3000/pokemons", {
				method: 'POST',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				headers: {
				'Content-Type': 'application/json'
				},
				redirect: 'follow',
				referrerPolicy: 'no-referrer', 
				body: JSON.stringify(pokemon) 
			});
	      // Reseteamos todos los campos y el indicador de envío o submitted
	    }
		this.userRegisterForm.reset();
		this.submitted = false;
		this.removeChild(); 
		this.addChild();
	}

	@ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
	@ViewChild('tpl', { read: TemplateRef }) tpl: TemplateRef<any>;

	addChild(){
		let view = this.tpl.createEmbeddedView(null);
		this.vc.insert(view);
	}

	removeChild(){
		if (document.getElementsByClassName("firstView")[0])
			document.getElementsByClassName("firstView")[0].innerHTML= '';
		this.vc.clear();
	}
}