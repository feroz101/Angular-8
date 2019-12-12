import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
 results: [];
  constructor(private  usersService: UsersService, private router: Router) { }
 email;
 errorMessage;
 isError:boolean;
 ngOnInit() {
     this
     .usersService
     .getUser()
     .subscribe((data) => {
       this.results = data.results;
       this.email = this.results[0].email;
       this.isError=false
      },
      (error)=>{this.errorMessage=error
       this.isError=true;
      }
       );

    }

}
