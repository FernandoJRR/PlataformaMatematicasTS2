import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarkEditorComponent } from './pages/mark-editor/mark-editor.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    MarkdownModule.forRoot(),
    MarkEditorComponent
  ]
})
export class ComponentsModule { }
