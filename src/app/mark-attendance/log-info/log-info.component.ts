import { Component, OnInit } from '@angular/core';
import { Fake } from 'src/app/models/fake.model';
import { FakeService } from 'src/app/services/fake.service';

export interface Log{
  Date:string;
  punchIn:string
  punchOut:string
  }

@Component({
  selector: 'app-log-info',
  templateUrl: './log-info.component.html',
  styleUrls: ['./log-info.component.css']
})


export class LogInfoComponent implements OnInit {
log:Fake[]=[
 
]
  constructor(private svc:FakeService) { }

  ngOnInit() {
    this.svc.getAll().subscribe(data=>{
      this.log=data
    });
  }
// getData(){
//   return this.log;
// }
}
