import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../shared/footer/footer.component";
import { IntroVideoComponent } from "./intro-video/intro-video.component";
import { CourseComponent } from "./course/course.component";
import { MountainIntroComponent } from "./mountain-intro/mountain-intro.component";
import { MapComponent } from "../shared/map/map.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FooterComponent, IntroVideoComponent, CourseComponent, MountainIntroComponent, MapComponent]
})
export class AppComponent {
}
