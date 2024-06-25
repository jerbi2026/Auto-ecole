import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private authService: AuthService) { }
    username = '';
    password = '';
    reset_pass='';

    signUp() {
      if(this.password === this.reset_pass && this.password.length >= 6){
        this.authService.signUp(this.username, this.password)
        .then(res => {
          console.log(res);
          
        })
        .catch(err => {
          console.log(err);
        });

      }

     
        
    }
  
    SignUpWithGoogle(): void {
      this.authService.signUpWithGoogle()
        .then((res) => {
          console.log(res);
          
        })
        .catch((error) => {
          
          console.error('Erreur lors de la connexion avec Google:', error);
        });
    }

    SignUpWithGithub(): void {
      this.authService.signUpWithGitHub()
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error('Erreur lors de la connexion avec GitHub:', error);
        });
    }

}
