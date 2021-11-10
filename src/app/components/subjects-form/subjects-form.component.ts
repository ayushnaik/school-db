import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subjects } from '../../Subjects';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-subjects-form',
  templateUrl: './subjects-form.component.html',
  styleUrls: ['./subjects-form.component.scss']
})
export class SubjectsFormComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private httpservice: HttpService) { }

  public subCode!: String;
  public subName!: String;
  public maxMarks!: String;
  public minMarks!: String;
  public subClass!: String;
  public subjects: Subjects = new Subjects;
  public hasError = false;
  public errorMessage!: string;

  ngOnInit(): void {
  }
  validate() {
    if (!this.subjects) {
      this.hasError = true;
      this.errorMessage = "Cannot submit the empty content.";
    }
  }

  saveSubjects() {
    this.validate();
    if (!this.hasError) {
      const newSubjects= new Subjects();
      newSubjects.subCode = this.subCode;
      newSubjects.subName = this.subName;
      newSubjects.maxMarks = this.maxMarks;
      newSubjects.minMarks = this.minMarks;
      newSubjects.subClass = this.subClass;
      this.httpservice.saveToSubjects(newSubjects);
    }
  }

}
