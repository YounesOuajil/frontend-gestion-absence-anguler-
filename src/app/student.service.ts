import { Injectable } from '@angular/core';
import { Student } from './models/student';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 

 

  

  private idSource = new BehaviorSubject<number>(0);
  currentId = this.idSource.asObservable();

  setId(id: number): void {
    this.idSource.next(id);
  }
  markAbsent(student: Student): void {
    student.isPresent = true;
  }
}
