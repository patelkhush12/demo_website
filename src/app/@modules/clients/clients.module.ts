import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ClientsResolver } from './@resolver/clients.resolver';

const routes: Routes = [
  {
    path: '', component: ClientsComponent,
    resolve: { clientsData: ClientsResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ClientsComponent]
})
export class ClientsModule { }
