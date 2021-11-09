import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  public gridData: any[] = [
    {
      studentID: 1,
      name: "Shamal iroshan",
      gender: "Male",
      address: "Horana",
      mobileNo: "0752736788",
      dateOfBirth: "2000-10-02",
      age: "21"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
