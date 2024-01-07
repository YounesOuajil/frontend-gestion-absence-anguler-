import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-groups-comp',
  templateUrl: './groups-comp.component.html',
  styleUrl: './groups-comp.component.css'
})
export class GroupsCompComponent {
  constructor(public route:ActivatedRoute,){}

  ngOnInit(): void {
 
    this.route.params.subscribe(params => {
      const id = +params['id'];
      console.log('Parameter id:', id);
    });
  
}
}
