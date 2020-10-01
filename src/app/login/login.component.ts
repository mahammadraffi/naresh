import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=[
    {
      name:'raffi',
      age:23,
      sal:10000
    },
    {
      name:'naresh',
      age:24,
      sal:11000
    },
    {
      name:'prashanth',
      age:24,
      sal:12000
    },
    {
      name:'ramu',
      age:25,
      sal:13000
    }
];
addemp(){
  this.user.unshift({
    name:'ramu',
     age:25,
    sal:13000
  })
};
removeEmp(emp){
let index=this.user.indexOf(emp);
this.user.splice(index,1);
};

color="red"

  constructor() { }

  ngOnInit() {
  }

}
