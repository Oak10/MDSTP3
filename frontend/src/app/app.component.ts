import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { 
        label: 'Home',  
        icon:'pi pi-fw pi-home',
        routerLink: ['home']
      },
        { 
          label: 'Lessons',  
          icon:'pi pi-fw pi-book',
          routerLink: ['lesson']
        },
        { 
          label: 'Quiz',  
          icon:'pi pi-fw pi-question',
          routerLink: ['quiz']
        },

    ];
}


}
