import { Component, OnInit } from '@angular/core';


export class Reviewer {
  constructor(
    public name: string,
    public item: string 
  ) {}
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formatSalary(value: number) { 
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k'
    }

    return value
  }

  reviewers: Reviewer[] = []
  constructor() { }

  ngOnInit(): void {
    this.reviewers = [
      { name: "Paul M. ", item: "Green raincoat" },
      { name: "Beth S. ", item: "Purple hat" },
      { name: "Ron  K. ", item: "Golden glasses" },
      { name: "Leander J.", item: "Beige jacket" },
      { name: "Leah P. ", item: "Red sweater" }
    ];
  }

}
