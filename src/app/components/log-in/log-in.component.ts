import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.less']
})
export class LogInComponent implements OnInit {

  public user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(): void{
    console.log(this.user.email + this.user.password);
  }
}
