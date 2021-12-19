/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';

@Component({
	selector: 'ngx-classwork-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {

	public headerTitle: string = 'This is my course project';
	public text: string = 'Tihon';
	public constructor(){}

	
	public appToggle(myObject: any): void {
		console.log(myObject)
	}

	public getSearchText(text: string): void {
		this.text = text;
		console.log(this.text);
	}

}
