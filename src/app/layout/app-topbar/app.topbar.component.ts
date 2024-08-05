import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "../service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;
    valSwitch = false;

    constructor(public layoutService: LayoutService) {
    }

  toggleTheme() {
    this.valSwitch = !this.valSwitch;
    const theme = this.valSwitch ? 'dark-theme' : 'light-theme';
    this.layoutService.setTheme(theme);

  }
}

