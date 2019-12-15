import { Component, OnInit, HostListener } from '@angular/core';
import { UsersService } from '../users/users.service.js';
import { User } from '../users/user.js';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  public users: User [] =[];
  public isLoading:boolean=false
  constructor(private userService:UsersService) {
    
  }

  ngOnInit() {
    this.userService.getUser().subscribe(data=>{
     
      data.results.map(data=>{
         console.log(data);
         
        let user:any={
            image:data.picture.large,
            name:data.email,
            profession:data.gender  
      }
      this.users.push(user)
   
      })
     
    })
  }
  @HostListener("window:scroll", [])
  onScroll(): void {
    
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.isLoading=true
      setTimeout(() => {
      this.userService.getUser().subscribe(data=>{
     
       
        data.results.map(data=>{
          let user:any={
              image:data.picture.large,
              name:data.email,
              profession:data.gender  
        }
        this.users.push(user)
        this.isLoading=false  
    
      }, 20000);
    })
       
      })

    }
  }
}
