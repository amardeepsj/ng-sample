import { Component } from '@angular/core';
//import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample Application';
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
          label: 'Home',
          routerLink: '/home'
      },
      {
        label: 'Page 2',
        items: [{
                label: 'Child Menu 1', 
                items: [
                    {label: 'Child Menu 1.1', routerLink: '/page2'},
                    {label: 'Child Menu 1.2', routerLink: '/page2'},
                ]
            },
            {label: 'Child Menu 2', routerLink: '/page2'},
            {label: 'Child Menu 3', routerLink: '/page2'}
        ]
    }
  ];
  }
}
