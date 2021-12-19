/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchComponent } from './search/search.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DrawerComponent } from './drawer/drawer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';

@NgModule({
	declarations: [AppComponent, HeaderComponent, SearchComponent, DrawerComponent],
	imports: [BrowserModule, 
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		FlexLayoutModule,
		MatInputModule,
		MatFormFieldModule,
		MatSidenavModule,
		MatListModule
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
