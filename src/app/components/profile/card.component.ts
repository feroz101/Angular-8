import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
   public userCard:any={
    image:'https://images.pexels.com/photos/3265547/pexels-photo-3265547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name:"sana",
    profession:"developer",
    }
    @Input() user:any;
  constructor() { }

  ngOnInit() {
  }

}
