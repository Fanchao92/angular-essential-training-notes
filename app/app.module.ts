import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule
	],  // Bring other Angular Modules
	declarations: [
		AppComponent
	],  // Bring components available to this module and that are not from another module
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
	;
}