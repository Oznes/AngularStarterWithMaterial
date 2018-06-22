import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  
  
 

  @Input() name: string;
  @Input() surname: string;
  @Input() Age: number;
  @Input() date: Date;
  @Input() email: EmailValidator;

  

  
  constructor(private route: ActivatedRoute, private  router: Router) { 
   
  }
 
  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.name = params['name'],
      this.surname = params['surname'],
      this.Age= params['Age'],
      this.date = params['date'], 
      this.email= params['email']

    });
    
    
  }
  prevStep(){
    this.router.navigate(['order']);
  }
  nextStep(){
    this.router.navigate(['about']);
  }

}
