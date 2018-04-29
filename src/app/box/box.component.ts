import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TEAMS } from '../mock-team';
 
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  team: Team = {
    "id": 1,
    "name": 'England',
    "image": 'https://soccerlogo.net/wp-content/uploads/2016/05/Logo-England.png'
  };
 
  constructor() { }
 
  ngOnInit() {
  }
 
}