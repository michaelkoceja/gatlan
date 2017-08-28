import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  private LandingLOGO = ("./assets/gatlanheaderlogo.png");
  private LandingHERO = ("./assets/landingpage-header.png");

  constructor() { }

  ngOnInit() {
  }

}
