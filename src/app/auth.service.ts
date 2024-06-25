import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private http:HttpClient) { }

  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.afAuth.signOut();
  }

  async loginWithGoogle(): Promise<void> {
    try {
      const auth: Auth = getAuth(); 
      const provider = new GoogleAuthProvider(); 

      const result = await signInWithPopup(auth, provider); 

     
      console.log('Connexion réussie avec Google:', result.user);
    } catch (error) {
      console.error('Erreur lors de la connexion avec Google:', error);
      throw error; 
    }
  }

  async signUpWithGoogle(): Promise<void> {
    try {
      const auth: Auth = getAuth();
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      console.log('Inscription réussie avec Google:', result.user);
    } catch (error) {
      console.error('Erreur lors de l\'inscription avec Google:', error);
      throw error; // Propage l'erreur pour la gérer à un niveau supérieur si nécessaire
    }
  }

  async loginWithGitHub(): Promise<void> {
    try {
      const auth: Auth = getAuth();
      const provider = new GithubAuthProvider();
  
      const result = await signInWithPopup(auth, provider);
  
      console.log('Connexion réussie avec GitHub:', result.user);
    } catch (error) {
      console.error('Erreur lors de la connexion avec GitHub:', error);
      throw error; 
    }
  }
  
  async signUpWithGitHub(): Promise<void> {
    try {
      const auth: Auth = getAuth();
      const provider = new GithubAuthProvider();
  
      const result = await signInWithPopup(auth, provider);
  
      console.log('Inscription réussie avec GitHub:', result.user);
    } catch (error) {
      console.error('Erreur lors de l\'inscription avec GitHub:', error);
      throw error; 
    }
  }
}
