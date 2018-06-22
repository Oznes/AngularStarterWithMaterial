import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  constructor(private router: Router,private privateRoute: ActivatedRoute) { }

 name;
 surname;
 Age;
 date;
 email;


  

  ngOnInit() {
  }
  onLogin(){
   
    this.router.navigate(['confirmation'],{queryParams:{
      name: this.name,
      surname: this.surname,
      age: this.Age,
      date: this.date,
      email: this.email

   }});

    
   

   
  }
  onCancel(){
    console.log("im about cancel everything");
   
  }
  onClear(){
    console.log("im about clear");
  }

}
