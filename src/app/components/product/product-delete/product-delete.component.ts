import { Product } from "./../product.model";
import { ProductService } from "./../product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    name: "",
    price: 0,
  };

  id = +this.route.snapshot.params.id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    /* const id: string = this.route.snapshot.params.id; */
    /* const id = this.route.snapshot.paramMap.get('id'); */ /* não funciona mais */
    this.productService.readById(this.id).subscribe((product) => {
      this.product = product;
      console.log("PRODUCT: ", this.product);
    });
  }
  deletarProduto(): void {
    this.productService.delete(this.id).subscribe(() => {
      this.productService.showMessage("Produto Excluido!");
      this.router.navigate(["/products"]);
    });
  }
  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
