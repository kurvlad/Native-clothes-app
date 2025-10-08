export interface ClothesEntitiesInterface {
  uuid_product: string;
  price: number;
  src: string;
  isLiked: boolean;
  title: string;
}

export class ClothesEntities {
  uuid_product: string;
  price: number;
  src: string;
  isLiked: boolean;
  title: string;
  constructor(props: ClothesEntitiesInterface) {
    this.uuid_product = props.uuid_product;
    this.price = props.price;
    this.src = props.src;
    this.isLiked = props.isLiked;
    this.title = props.title;
  }
}
