import { Component, OnInit } from '@angular/core';
import { AuthService ,SocialUser} from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import{LoginServiceService} from '../../services/login-service.service'
import{User} from '../../models/usermodel'
import{ CookieService} from 'ngx-cookie-service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user: SocialUser;
   validationObject:User;
   viewPageUrl:string;
   

  constructor(private authService: AuthService,
    private loginService:LoginServiceService,
    private cookieService:CookieService,
    private router: Router)  { }

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
        this.loginService.verifyToken(user.idToken)
        .subscribe((data)=>{
        this.validationObject=data
        this.cookieService.set(
          'vcookie',JSON.stringify(this.validationObject),0.0416667,'/','localhost',false,"Strict"
        )
        this.validationObject=JSON.parse(this.cookieService.get('vcookie'))
        console.log(this.validationObject)
        this.viewPageUrl='/view/'+this.validationObject.userid
        this.router.navigate([this.viewPageUrl])
        },
        (err)=>{
          window.alert("no response from server")
        })
      }
      else if(this.cookieService.check('vcookie')){
        this.validationObject=JSON.parse(this.cookieService.get('vcookie'))
        console.log(this.validationObject)
        this.viewPageUrl='/view/'+this.validationObject.userid
        this.router.navigate([this.viewPageUrl])
      }
    });
  
  }

}
