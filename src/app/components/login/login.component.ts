import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getAccessTokenSilently()
      .subscribe(accessToken => {
        console.log(accessToken);
      });
  }

}
