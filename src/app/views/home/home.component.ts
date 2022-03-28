import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  /* numbers: number[] = [1, 2, 3, 4, 5]; */

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: "Ínicio",
      icon: "home",
      routeUrl: "",
    };
  }

  ngOnInit(): void {
    /* console.log(this.numbers); */
  }

  get title(): string {
    return this.headerService.headerData.title;
  }
}
