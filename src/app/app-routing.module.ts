import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { FormsComponent } from './forms/forms.component';
import { HistoryComponent } from './history/history.component';
import { ReportsComponent } from './reports/reports.component';
import { SubmissionFormComponent } from './submission-form/submission-form.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [
  { path: '', redirectTo: '/submission', pathMatch: 'full' },
  {path: 'forms', component: FormsComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'submission', component: SubmissionFormComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'workflow', component: WorkflowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
