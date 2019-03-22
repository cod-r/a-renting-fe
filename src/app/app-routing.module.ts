import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'rest', pathMatch: 'full'},
    {path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
    {path: 'car-list', loadChildren: './pages/car-list/car-list.module#CarListPageModule'},
    {path: 'qr-generator', loadChildren: './pages/qr-generator/qr-generator.module#QrGeneratorPageModule'},
    {path: 'rest', loadChildren: './pages/rest/rest.module#RestPageModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
