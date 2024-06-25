import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent {

  constructor(private authService: AuthService,private afAuth:AngularFireAuth) { }
    username = '';
    password = '';
    message='';

    resetPassword() {
      this.afAuth.sendPasswordResetEmail(this.username)
        .then(() => {
          this.message = "Un e-mail de réinitialisation de mot de passe a été envoyé à votre adresse e-mail.";
        
        })
        .catch((error) => {
          console.error(error);
          this.message = "Une erreur s'est produite lors de l'envoi de l'e-mail de réinitialisation de mot de passe. Veuillez réessayer plus tard.";
        });
    }

   

}
