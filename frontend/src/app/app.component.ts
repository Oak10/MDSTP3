import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  items: MenuItem[] = [];
  apiLoaded = false;

  ngOnInit() {
    this.items = [
      {
        label: 'Lessons',
        icon: 'pi pi-fw pi-book',
        routerLink: ['lesson']
      },
      {
        label: 'Quiz',
        icon: 'pi pi-fw pi-question',
        routerLink: ['quiz']
      },
      {
        label: 'Score',
        icon: 'pi pi-fw pi-list',
        routerLink: ['score']
      },
      {
        label: 'References',
        icon: 'pi pi-fw pi-info',
        routerLink: ['refs']
      }
    ];
  }


}
