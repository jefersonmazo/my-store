import { Component } from '@angular/core';
import { Product } from './product.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Jeferson';
  age = 27;
  img = 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg';
  btnDisabled = true;
  register = {
    name: '',
    email: '',
    password: '',
  }

  paisaje = 'Paisaje';
  person = {
    name: 'Jeferson',
    age: 27,
    avatar: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg'
  }
  names: string[] = ['Jefer', 'Nico', 'Juli'];  //Lista de nombres
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };
  products: Product[] = [  //Solo sirve para array
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/Images/mt09.jpg',
      category: 'all'
    },
    {
      name: 'Bicicleta nueva',
      price: 50,
      image: './assets/Images/bicicleta.jpg'
    },
    {
      name: 'Libros nuevos',
      price: 10,
      image: './assets/Images/libros.jpg'
    },
    {
      name: 'Monopatin nuevo',
      price: 100,
      image: './assets/Images/monopatin1.jpg'
    },
    {
      name: 'Auto nuevo',
      price: 2200,
      image: './assets/Images/automovil.jpg'
    },
    {
      name: 'Cascos nuevos',
      price: 200,
      image: './assets/Images/cascos.jpg'
    }
  ]


  toggleButton() { // Evento para activar o desactivar un boton
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){ //Evento con botones de incremento
    this.person.age += 1;
  }
  decreaseAge(){ //Evento con botones de disminución
    this.person.age -= 1;
  }
  onScroll(event:Event){ // Evento con el Scroll
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  // Evento con el Imput
  changeName(event:Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  //Evento para agregar nuevos nombres en la lista
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }
}


