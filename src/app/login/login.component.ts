import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private authService: AuthService) { }
    username = '';
    password = '';

    signIn() {
      this.authService.signIn(this.username, this.password)
        .then(res => {
          console.log(res);
          
        })
        .catch(err => {
          console.log(err);
        });
        
    }
  
    LoginWithGoogle(): void {
      this.authService.loginWithGoogle()
        .then((res) => {
          console.log(res);
          
        })
        .catch((error) => {
          
          console.error('Erreur lors de la connexion avec Google:', error);
        });
    }

    LoginWithGithub(): void {
      this.authService.loginWithGitHub()
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error('Erreur lors de la connexion avec GitHub:', error);
        });
    }

   

}
