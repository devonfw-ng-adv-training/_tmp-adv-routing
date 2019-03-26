import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet><br>{{loading}}'
})
export class AppComponent implements OnInit {
  loading = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(routerEvent => {
      if (routerEvent instanceof ResolveStart) {
        this.loading = true;
      }
      if (routerEvent instanceof ResolveEnd) {
        this.loading = false;
      }
    });
  }
}
