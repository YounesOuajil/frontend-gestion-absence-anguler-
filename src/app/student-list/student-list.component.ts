import { Student } from './../models/student';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students!: Student[];
  public currentId!: number;

  constructor(private studentService: StudentService) {
    this.students = [
      new Student('John', 'Doe', 1, 'Computer Science'),
      new Student('Jane', 'Doe', 2, 'Electrical Engineering'),
      new Student('Alice', 'Smith', 3, 'Mechanical Engineering'),
      new Student('Bob', 'Johnson', 1, 'Chemical Engineering'),
      new Student('Eva', 'Williams', 2, 'Civil Engineering'),
    ];
  }

  ngOnInit(): void {
    this.studentService.currentId.subscribe(id => {
      this.currentId = id;
      console.log('Current Id in AnotherComponent:', this.currentId);
    });
  }

  markAbsent() {
    // Implement your logic for marking absent students here
  }
}
