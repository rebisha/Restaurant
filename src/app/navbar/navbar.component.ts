import { Component, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    @Output() featureSelected = new EventEmitter<string>(); //@Output() enables this event to be listened from outside. @Output helps us to use this event or listens from parent component.

	
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
	
}