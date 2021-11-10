import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Students } from '../../Students';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss']
})
export class StudentsFormComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private httpservice: HttpService) { }

  public rollNo!: String;
  public stdName!: String;
  public stdAddress!: String;
  public stdPhNo!: String;
  public stdClass!: String;
  public students: Students = new Students;
  public hasError = false;
  public errorMessage!: string;

  ngOnInit(): void {
  }

  validate() {
    if (!this.students) {
      this.hasError = true;
      this.errorMessage = "Cannot submit the empty content.";
    }
  }

  saveStudents() {
    this.validate();
    if (!this.hasError) {
      const newStudents = new Students();
      newStudents.rollNo = this.rollNo;
      newStudents.stdName = this.stdName;
      newStudents.stdAddress = this.stdAddress;
      newStudents.stdPhNo = this.stdPhNo;
      newStudents.stdClass = this.stdClass;
      this.httpservice.saveToStudents(newStudents);
    }
  }

}
