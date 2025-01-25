import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-common',
  imports: [],
  templateUrl: './common.component.html',
  styleUrl: './common.component.css'
})


export class CommonComponent implements OnInit {

  names: string[] = [];
  constructor(private commonService: CommonService) {}
  

  ngOnInit(): void {
    this.commonService.getNames().subscribe((data) => {
      this.names = data.names;
    });
  }

}
