import { outputAst } from '@angular/compiler';
import { Component, OnInit ,Input, EventEmitter,Output} from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})

export class ModalProductComponent implements OnInit {
  @Input() prod:Product | undefined
  @Output() closeModal: EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  closeM(){
    console.log("ccccccc")
    this.closeModal.emit();
  }

}
