import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm !: FormGroup;
  constructor() { }

  myFirstObservable = new Observable((observer) => {
    console.log('observable starts');
    observer.next("1");
    observer.next("2");
    observer.next("3");
    observer.next("4");
    observer.next("5");
    observer.next("6");
  });

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      aszf: new FormControl(Validators.required),
    });

    this.myFirstObservable.subscribe((val) => {
      console.log(val);
    });
  }
  onSubmit(){
    console.log(this.contactForm);
  }

  employees: any[] = [
    {"name": 'Erik', age: 22, 'salary': 1000000, "job_description": "CEO and senior full-stack web developer", dateOfBirth: '3/25/1974', 'performance': 100},
    {"name": 'Robert', age: 52, 'salary': 500000, "job_description": "Truck driver", dateOfBirth: '5/19/1970', 'performance': 80},
    {"name": 'Róbertné', age: 48, 'salary': 400000, "job_description": "Lead Accountant and HR", dateOfBirth: '10/30/1974', 'performance': 100},
  ];

  

}
