import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
 public results:[]=[];
  constructor(private  usersService: UsersService, private router: Router) { }
 public email;
 public errorMessage;
 public isError:boolean;
 ngOnInit() {
     this
     .usersService
     .getUser()
     .subscribe((data) => {
       this.results = data.results;
       this.isError=false
       this.results.map((data:any)=>{
         this.email=data.email;
       })
      },
      (error)=>{this.errorMessage=error
       this.isError=true;
      }
       );

    }

}
