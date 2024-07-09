import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Temario } from '../../../interfaces/temario.interface';
import { Tema } from '../../../interfaces/tema.interface';
import { TemarioService } from '../../services/temario.service';
import { TemaService } from '../../services/tema.service';
import { GlobalsService } from '../../../globals/globals.service';
import { MarkEditorComponent } from '../../../components/pages/mark-editor/mark-editor.component';

@Component({
  selector: 'app-informacion-tema',
  templateUrl: './informacion-tema.component.html',
  styleUrls: ['./informacion-tema.component.css'],
})
export class InformacionTemaComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChild('markEditor') markEditor!: MarkEditorComponent;

  temarioFormGroup: FormGroup;
  informacionFormGroup: FormGroup;
  temarios: Temario[] = [];
  temaControl = new FormControl<Tema | null>(null, Validators.required);
  temaSeleccionado!: Tema;

  markdownContent: string = '';
  editor: boolean = true;

  constructor(
    private _formBuilder: FormBuilder,
    private temarioService: TemarioService,
    private temaService: TemaService,
    private globalsService: GlobalsService
  ) {
    this.temarioFormGroup = this._formBuilder.group({
      tema: this.temaControl
    });

    this.informacionFormGroup = this._formBuilder.group({
      informacion: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.cargarTemarios();
  }

  cargarTemarios() {
    const profesor: string = this.globalsService.getUser().username;
    this.temarioService.obtenerListaTemariosProfesor(profesor).subscribe({
      next: (response: Temario[]) => {
        this.temarios = response;
      },
      error: (error) => {
        console.error('Error al cargar temarios', error);
      }
    });
  }

  onTemaChange(tema: Tema) {
    this.temaSeleccionado = tema;
    this.informacionFormGroup.patchValue({
      informacion: tema.informacion || ''  // Asigna un valor vacío si 'informacion' es null
    });

    if (tema.informacion === null) {
      this.markEditor.setMarkdownContent('');
    } else {
      const contentProcesado = tema.informacion!.replaceAll('<br>', '\n');
      this.markEditor.setMarkdownContent(contentProcesado);
    }
  }
  

  guardarInformacion() {
    if (this.informacionFormGroup.invalid) {
      this.informacionFormGroup.markAllAsTouched();
      return;
    }
  
    const informacionActualizada = this.markEditor.getMarkdownContent() || ''; //Se convierte en vacio si es null
    const temaActualizado = {
      ...this.temaSeleccionado,
      informacion: informacionActualizada
    };
  
    this.temaService.actualizarTema(temaActualizado).subscribe({
      next: (response) => {
        console.log('Información del tema actualizada correctamente');
        this.stepper.reset();
      },
      error: (error) => {
        console.error('Error al actualizar la información del tema', error);
      }
    });
  }
}
