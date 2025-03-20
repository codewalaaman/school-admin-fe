import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  state,
} from '@angular/animations';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  standalone: true, 
  imports: [CommonModule, RouterModule, TranslateModule], 
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('accordionAnimation', [
      state('void', style({ height: '0px', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  projects = [
    {
      name: 'Project 1',
      isOpen: false,
      links: ['Link A', 'Link B', 'Link C'],
      icon: '/assets/icons/project.svg',
    },
  ];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); 
    this.translate.use('en'); 
  }

  ngOnInit(): void {}

  openDropdown(index: number) {
    this.projects[index].isOpen = !this.projects[index].isOpen;
  }
}
