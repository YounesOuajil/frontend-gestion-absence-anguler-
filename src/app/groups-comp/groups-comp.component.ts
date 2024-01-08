import { StudentService } from './../student.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-groups-comp',
  templateUrl: './groups-comp.component.html',
  styleUrl: './groups-comp.component.css'
})
export class GroupsCompComponent {
  constructor(public route:ActivatedRoute,public studentService :StudentService){}

  public id!:number;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
       this.id = +params['id'];
      console.log('Parameter id:', this.id);
      this.studentService.setId(this.id);
      
    });

    
  }

  
}

