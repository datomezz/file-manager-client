import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnChanges {
  isAuth = false;

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit(): void {
    this.authService.isAuth.subscribe(data => this.isAuth = data);
    console.log("afterInit", this.isAuth);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
  }

  onLogout() {
    return this.authService
      .onLogout()
      .subscribe(() => {
        this.router.navigate(["/auth"])
      })
  }
}
