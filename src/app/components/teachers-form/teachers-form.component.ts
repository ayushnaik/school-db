import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teachers } from '../../Teachers';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-teachers-form',
  templateUrl: './teachers-form.component.html',
  styleUrls: ['./teachers-form.component.scss']
})
export class TeachersFormComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private httpservice: HttpService) { }

  public teaId!: String;
  public teaName!: String;
  public teaAddress!: String;
  public teaPhNo!: String;
  public teaSubjects!: String;
  public teachers: Teachers = new Teachers;
  public hasError = false;
  public errorMessage!: string;

  ngOnInit(): void {
  }
  validate() {
    if (!this.teachers) {
      this.hasError = true;
      this.errorMessage = "Cannot submit the empty content.";
    }
  }

  saveTeachers() {
    this.validate();
    if (!this.hasError) {
      const newTeachers = new Teachers();
      newTeachers.teaId = this.teaId;
      newTeachers.teaName = this.teaName;
      newTeachers.teaAddress = this.teaAddress;
      newTeachers.teaPhNo = this.teaPhNo;
      newTeachers.teaSubjects = this.teaSubjects;
      this.httpservice.saveToTeachers(newTeachers);
    }
  }

}
