import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { IntroVideoComponent } from '../intro-video/intro-video.component';
import { CourseComponent } from '../course/course.component';
import { MountainIntroComponent } from '../mountain-intro/mountain-intro.component';
import { MapComponent } from '../../shared/map/map.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FooterComponent, IntroVideoComponent, CourseComponent, MountainIntroComponent, MapComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
