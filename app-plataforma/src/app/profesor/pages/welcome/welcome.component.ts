import { Component, ViewChild } from '@angular/core';
import { MarkEditorComponent } from '../../../components/pages/mark-editor/mark-editor.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  @ViewChild('markEditor') markEditor!: MarkEditorComponent;

  title: string = 'Bienvenido Profesor';
  editor: boolean = false;


  setMarkdownContent(): void {
    let markdownContent: string = `# Bienvenido a Mi Editor de Markdown

Este es un simple editor de Markdown hecho con Angular y ngx-markdown.

## Características

- **Negrita**
- *Cursiva*
- [Enlaces](https://www.google.com)
- \`Código en línea\`

### Código

\`\`\`python
def saludo():
    print("Hola, Mundo!")

saludo()
`;
    this.markEditor.setMarkdownContent(markdownContent);
  }

  showMarkdownContent(): void {
    const content = this.markEditor.getMarkdownContent();
    console.log(content); // Aquí puedes hacer lo que necesites con el contenido
  }

  showEditor(): void {
    this.editor = true;
  }
}
