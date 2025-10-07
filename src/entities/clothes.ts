export interface ClothesEntitiesInterface {
  uuid_product: string;
  price: number;
  src: string;
  isLiked: boolean;
}

export class ClothesEntities {
  uuid_product: string;
  price: number;
  src: string;
  isLiked: boolean;
  constructor(props: ClothesEntitiesInterface) {
    this.uuid_product = props.uuid_product;
    this.price = props.price;
    this.src = props.src;
    this.isLiked = props.isLiked;
  }
}
