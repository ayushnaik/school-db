import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public students = this.httpservice.students;
  public subjects = this.httpservice.subjects;
  public teachers = this.httpservice.teachers;

  @Input() student: any;
  @Input() subject: any;
  @Input() teacher: any;
  @Output() studentItemEmitter = new EventEmitter<any>();
  @Output() subjectItemEmitter = new EventEmitter<any>();
  @Output() teacherItemEmitter = new EventEmitter<any>();

  constructor(private http: HttpClient, private httpservice: HttpService) { }

  ngOnInit(): void {
    this.fetchStudents();
    this.fetchSubjects();
    this.fetchTeachers();
  }

  fetchSubjects() {
    return this.httpservice.fetchTheSubjects();
  }

  fetchTeachers() {
    return this.httpservice.fetchTheTeachers();
  }

  fetchStudents() {
    return this.httpservice.fetchTheStudents();
  }

  refreshStoreList() {
    this.studentItemEmitter.emit();
    this.subjectItemEmitter.emit();
    this.teacherItemEmitter.emit();
  }

}
