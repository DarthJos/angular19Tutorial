import { RouterModule, Routes } from '@angular/router';
import { SignalComponent } from './components/signal/signal.component';
import { NgModule } from '@angular/core';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { GetApiComponent } from './components/API/get-api/get-api.component';
import { PostApiComponent } from './components/API/post-api/post-api.component';
import { ResourceApiComponent } from './components/API/resource-api/resource-api.component';
import { ObservableExamplesComponent } from './components/observable-examples/observable-examples.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'dataBinding',
        pathMatch: 'full'
    },
    {
        path: 'signal',
        component: SignalComponent
    },
    {
        path: 'linked-signal',
        component: LinkedSignalComponent
    },
    {
        path: 'dataBinding',
        component: DataBindingComponent
    },
    {
        path: 'get-api',
        component: GetApiComponent
    },
    {
        path: 'post-api',
        component: PostApiComponent
    },
    {
        path: 'resource-api',
        component: ResourceApiComponent
    },
    {
        path: 'observable-examples',
        component: ObservableExamplesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }