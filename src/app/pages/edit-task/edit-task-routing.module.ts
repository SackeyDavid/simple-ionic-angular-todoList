import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTaskPage } from './edit-task.page';

const routes: Routes = [
  {
    path: '',
    component: EditTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTaskPageRoutingModule {}
