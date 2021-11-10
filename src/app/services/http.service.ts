import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Students } from '../Students';
import { Subjects } from '../Subjects';
import { Teachers } from '../Teachers';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public students: any = [];
  public subjects: any = [];
  public teachers: any = [];
  apiUrl = env.BASE_URL;

  constructor(private http: HttpClient, private router: Router) { }

  saveToStudents(newStudents = new Students()) {
    this.http.post(this.apiUrl+'/poststudents', newStudents).subscribe(
        (resp: any) => {
          console.log(resp);
          this.router.navigateByUrl('home');
        },
        err => console.log(err)
      )
  }

  saveToSubjects(newSubjects = new Subjects()) {
    this.http.post(this.apiUrl+'/postsubjects', newSubjects).subscribe(
        (resp: any) => {
          console.log(resp);
          this.router.navigateByUrl('home');
        },
        err => console.log(err)
      )
  }

  saveToTeachers(newTeachers = new Teachers()) {
    this.http.post(this.apiUrl+'/postteachers', newTeachers).subscribe(
        (resp: any) => {
          console.log(resp);
          this.router.navigateByUrl('home');
        },
        err => console.log(err)
      )
  }

  fetchTheSubjects() {
    this.http.get(this.apiUrl+'/getsubjects').subscribe((Response) => {
      this.subjects = Response;
      console.log(this.subjects);
    });
  }

  fetchTheStudents() {
    this.http.get(this.apiUrl + '/getstudents').subscribe((Response) => {
      this.students = Response;
      console.log(this.students);
    });
  }

  fetchTheTeachers() {
    this.http.get(this.apiUrl+'/getteachers').subscribe((Response) => {
      this.teachers = Response;
      console.log(this.teachers);
    });
  }
}
