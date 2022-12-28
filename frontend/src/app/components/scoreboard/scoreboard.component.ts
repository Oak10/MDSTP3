import { Component, ViewChild } from '@angular/core';
import { Score } from 'src/app/common/score';
import { ScoreService } from 'src/app/services/score.service';
import { Table } from 'primeng/table'


@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
  scores: Score[] = [];

  @ViewChild('dt1') dt: Table | undefined;

  constructor(
    private scoreService: ScoreService) { }


    ngOnInit(): void {
      this.scoreService.getScoresList().subscribe(
        data => {
          this.scores = data;
        });
    }


    clear(table: Table) {
      table.clear();
  }
    
  applyFilterGlobal($event: any, stringVal: any) {
    console.log($event)
    console.log("stringval -Z", stringVal)
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
