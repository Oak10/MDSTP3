import { Component, OnInit } from '@angular/core';
import { Refs } from 'src/app/common/refs';
import { RefsService } from 'src/app/services/refs.service';

@Component({
  selector: 'app-refs',
  templateUrl: './refs.component.html',
  styleUrls: ['./refs.component.css']
})
export class RefsComponent implements OnInit {

  constructor(private refsService: RefsService) { }

  refs: Refs[] = [];

  ngOnInit(): void {
    this.refsService.getRefsList().subscribe(
      data => {
        this.refs = data;
      });
  }

}
