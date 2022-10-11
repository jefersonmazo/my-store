export interface Product {
  name: string;
  price: number;
  image: string;
  category?: string;  //El signo de pregunta indica que no es estricto para todos (opcional)
}
