import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;
    email: string;
    loginError: boolean;
    cadastrando: boolean;

  constructor(
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
     this.router.navigate(['/home'])
  }

  preparaCadastro(event) {
      event.preventDefault();
      this.cadastrando=true;
  }

  cancelaCadastro() {
    this.cadastrando=false;
}

}
