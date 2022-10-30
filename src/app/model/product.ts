export interface Product {
  id:string,
  name:string,
  desc:string,
  category: string[],
  imgURL: string[],
  new_prix:number,
  old_prix: number,
  created_date:Date,
  MAJ_date?:Date,

}
