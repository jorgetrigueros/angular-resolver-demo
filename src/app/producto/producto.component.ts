import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  logs: string[] = [];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.activatedRoute.data);
    this.activatedRoute.data.subscribe(
      data => this.logs = data.logs
    );
  }

}
