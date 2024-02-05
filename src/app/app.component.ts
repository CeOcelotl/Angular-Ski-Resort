import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomePageComponent]
})
export class AppComponent {
}
