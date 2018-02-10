import { Component, OnInit} from '@angular/core';

import { MenuList } from '../menu-list.model';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
    //breakfast,lunch,dinner 6ai MenuList type array ho jasma 6ai hamile new gardai menu add gardai 6au.MenuList 6ai hamile model ma define gareko 6au jasle 6ai name,description ra price as a parameter lin6
    
    entree: MenuList[] = [
        new MenuList('breakfast', 'breakfast description', 1.00),
        new MenuList('breakfast', 'breakfast description', 1.00)
    ];

    mains: MenuList[] = [
        new MenuList('lunch', 'lunch description', 2.00),
        new MenuList('lunch', 'lunch description', 2.00)
    ];

    dessert: MenuList[] = [
        new MenuList('dinner', 'dinner description', 3.00),
        new MenuList('dinner', 'dinner description', 3.00)
    ];

    
  constructor() { }

  ngOnInit() {
  }

  
}
