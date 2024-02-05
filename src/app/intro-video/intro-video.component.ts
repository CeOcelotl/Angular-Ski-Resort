import { Component } from '@angular/core';
import { MenuComponent } from "../../shared/menu/menu.component";

@Component({
    selector: 'app-intro-video',
    standalone: true,
    templateUrl: './intro-video.component.html',
    styleUrl: './intro-video.component.scss',
    imports: [MenuComponent]
})
export class IntroVideoComponent {

}
