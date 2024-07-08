import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'mark-editor',
  standalone: true,
  templateUrl: './mark-editor.component.html',
  styleUrls: ['./mark-editor.component.css'],
  imports: [CommonModule, FormsModule, MarkdownComponent],
})
export class MarkEditorComponent {
  //Content of the markdown editor
  @Input() markdownContent: string = '';
  //Boolean to show the editor
  //Si solo quremos mostrar el texto, lo ponemos en false
  @Input() editor: boolean = true;


  public setMarkdownContent(content: string): void {
    this.markdownContent = content;
  }

  public getMarkdownContent(): string {
    return this.markdownContent;
  }
}
