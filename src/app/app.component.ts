import { Component } from '@angular/core';
import { HeaderComponent } from './componentes/header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './componentes/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, HeaderComponent, MenuComponent],
})
export class AppComponent {
  constructor() {}
}
