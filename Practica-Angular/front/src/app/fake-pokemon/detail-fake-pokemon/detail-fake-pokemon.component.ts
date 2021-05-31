import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakePokemon } from '../fake-pokemon.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { compareTypes } from '../register-form/type2-validator';

@Component({
  selector: 'app-detail-fake-pokemon',
  templateUrl: './detail-fake-pokemon.component.html',
  styleUrls: ['./detail-fake-pokemon.component.scss']
})
export class DetailFakePokemonComponent implements OnInit {

  id: String;
  types: string[] = [''];
  pokemon: fakePokemon;



  // Incialización del formulario
  public userRegisterForm: FormGroup = null;
  // variable submitted a false
  public submitted: boolean = false;

  typeList1: string[] = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'ground', 'flying', 'ghost', 'rock', 'fighting', 'poison', 'psychic', 'bug', 'dark', 'steel', 'dragon', 'fairy'];
  typeList2: string[] = ['', 'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'ground', 'flying', 'ghost', 'rock', 'fighting', 'poison', 'psychic', 'bug', 'dark', 'steel', 'dragon', 'fairy'];


  // Inicializamos FormBuilder en el constructor
  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
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

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      this.id = params.get('pokemonID');
      fetch('http://localhost:3000/pokemons?id=' + this.id)
      .then( response => response.json())
      .then( data => {
        for (let type in data[0].types){
          this.types.push(data[0].types[type]);
        }     
        this.pokemon = {id : data[0].id, name : data[0].name, frontImage : data[0].frontImage, backImage : data[0].backImage, types : this.types};   
      });
    });
  }


  updatePokemon(){
    
  }
  deletePokemon(){
    fetch('http://localhost:3000/pokemons/' + this.id, {method: 'DELETE'});
    this.router.navigate(['fake-pokemon']);
  }


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
				id: '',
				name: this.userRegisterForm.get('name').value,
				frontImage: this.userRegisterForm.get('frontImage').value,
				backImage: this.userRegisterForm.get('backImage').value,
				types: types,
			};
			await fetch("http://localhost:3000/pokemons/"+this.id, {
				method: 'PATCH',
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
    location.reload();
	}
}
