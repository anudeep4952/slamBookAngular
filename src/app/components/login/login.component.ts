import { Component, OnInit } from '@angular/core';
import { AuthService ,SocialUser} from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import{LoginServiceService} from '../../services/login-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user: SocialUser;

  constructor(private authService: AuthService,private loginService:LoginServiceService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if(user){
        //console.log(user);
        this.loginService.verifyToken(user.idToken).subscribe((data)=>{console.log(data)})
      }
    });
  
  }

}
