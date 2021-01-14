import {RouterModule, Routes} from '@angular/router';
import {Componente1Component} from '../components/componente1/componente1.component';


const APP_ROUTES: Routes = [
  {path: '', component: Componente1Component}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
