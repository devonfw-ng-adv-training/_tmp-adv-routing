import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  <div class="d-flex justify-content-center">
    <div *ngIf="loading" class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>`
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
