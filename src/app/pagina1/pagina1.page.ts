import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: 'pagina1.page.html',
  styleUrls: ['pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || 'Usuario';
      console.log('Email received:', this.email);
    });
  }
}
