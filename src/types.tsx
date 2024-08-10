export interface Product {
  id: string;
  imageUrl: string;
  serving: number;
  title: string;
  price: number;
  quantity: number;
  flavour: string;
  descriptionHeading: string;
  descriptionParagraph: string;
  size: string;
}

export interface CartItem extends Product {
  quantity: number;
}
