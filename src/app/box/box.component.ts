import { Component, OnInit } from '@angular/core';
import { Games } from '../games';
 
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  box: Games = {
    id: 1,
    logo1: 'test1',
    logo2: 'test2',
    name: 'England vs France',
    date: '2016-01-05'
  };
 
  constructor() { }
 
  ngOnInit() {
  }
 
}