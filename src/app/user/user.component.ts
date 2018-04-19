import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public name: string;
  public email: string;
  public website: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      data => {
        console.log(data);
        this.name = data.user.name;
        this.email = data.user.email;
        this.website = data.user.website;
      }
    );
  }

}
