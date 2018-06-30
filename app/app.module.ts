import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule
	],  // NOTE: Bring other Angular Modules
	declarations: [
		AppComponent
	],  // NOTE: Bring components available to this module and that are not from another module
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
	;
}