import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Inject, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TemarioService } from '../../services/temario.service';
import { GlobalsService } from '../../../globals/globals.service';
import { Temario } from '../../../interfaces/temario.interface';
import { Tema } from '../../../interfaces/tema.interface';
import { TemaService } from '../../services/tema.service';
import { Ejercicio } from '../../../interfaces/ejercicio';

@Component({
  selector: 'app-editar-tema',
  templateUrl: './editar-tema.component.html',
  styleUrl: './editar-tema.component.css',
})
export class EditarTemaComponent implements AfterViewInit {
  //Seccion: Tab
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  // Formulario para nuevo tema
  newTemaForm: FormGroup = this._formBuilder.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
  });

  //Seccion: Stepper
  //Select de Temarios (multi-select)
  temarioControl = new FormControl<Temario | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  //Tabla de Temarios
  displayedColumns: string[] = ['id', 'titulo', 'descripcion', 'acciones']; //Agregar "acciones" para crear botones Edit y Delete
  dataSource = new MatTableDataSource<Tema>();

  //Crear Tema
  temarios!: Temario[];
  temas: Tema[] = [];
  ejercicios: Ejercicio[] = [];

  //Constructor
  constructor(
    private _formBuilder: FormBuilder,
    private _liveAnnouncer: LiveAnnouncer,
    private globalsService: GlobalsService,
    private temarioService: TemarioService,
    private temaService: TemaService,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.cargarTemarios();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  //Cargar los Temarios existenttes del Profesor
  cargarTemarios() {
    const profesor: string = this.globalsService.getUser().username;
    this.temarioService.obtenerListaTemariosProfesor(profesor).subscribe({
      next: (response: Object) => {
        this.temarios = response as Temario[];
      },
      error: (error) => {
        console.error('Error al cargar temarios', error);
        alert(error.error);
      },
    });
  }

  /* CREAR TEMA */
  //Enviar el objeto Tema con el servicio a la DB (Backend)
  crearTema() {
    //validamos que los campos obligatorios no sean vacios
    if (this.newTemaForm.invalid) {
      this.newTemaForm.markAllAsTouched();
      return;
    }

    const nuevoTema: Tema = this.newTemaForm.value; //valores dento del objeto
    nuevoTema.ejercicios = this.ejercicios; //Asignando array de Ejercicios vacio para Peticion

    if (this.temarioControl.value?.id) {
      this.temaService
        .crearTema(nuevoTema, this.temarioControl.value?.id)
        .subscribe(
          (data) => {
            console.log('Se creo el temaexitosamente');
            this.cargarTemarios(); //CARGAR INFO
            this.cargarTemas(this.temarioControl.value!);
          },
          (err) => {
            console.log('Error al crear Temario');
          }
        );
    } else {
      console.log('ID de Temario (temarioControl) es null|undefined');
    }
    this.newTemaForm.reset();
  }

  //Enviar el temario con el Tema creado a la DB
  enviarTemario() {}

  /* CRUD TEMA */
  //Asignar valor del Select al temarioControl
  onTemarioChange(selectedTemario: Temario) {
    this.temarioControl.setValue(selectedTemario);
    this.cargarTemas(this.temarioControl.value!);
  }

  //Obtener lista de Temas del Temario seleccionado
  cargarTemas(temario: Temario): void {
    const selectedTemario = temario; /* this.temarioControl.value */

    console.log(selectedTemario);
    console.log(this.dataSource.data);
    //this.dataSource.data = this.temarioControl.value?.temas;

    if (selectedTemario && selectedTemario.temas) {
      this.dataSource.data = selectedTemario.temas; //Asignamos temas del tema seleccionado en input a "dataSource"

      console.log(this.dataSource.data);

      this.dataSource = new MatTableDataSource(
        this.temarioControl.value?.temas
      );
      // Aquí conectamos el paginador y el sort de nuevo.
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  //Accion de Editar button
  editarTema(tema: Tema) {
    const dialogRef = this.dialog.open(EditarTemaDialog, {
      //Error
      width: '350px',
      height: 'auto',
      data: { ...tema },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Actualiza el tema con los datos editados
        const index = this.dataSource.data.findIndex((t) => t.id === result.id);
        if (index !== -1) {
          //Si es distinto del valor -1

          this.dataSource.data[index] = result;
          this.dataSource._updateChangeSubscription(); // Para actualizar la tabla
        }
      }
    });
  }

  //Accion de Eliminar button
  eliminarTema(id: number) {
    // Lógica para eliminar el tema
    const index = this.dataSource.data.findIndex((t) => t.id === id);
    if (index !== -1) {
      //this.temaService.eliminarTema(id); //NO EXISTE LA RUTA EN API
      //this.dataSource.data.splice(index, 1);
      //this.cargarTemas(); //Obtener nuevos temas
      this.dataSource._updateChangeSubscription(); //Para actualizar la tabla
    }
  }
}

// Componente para el diálogo de edición
@Component({
  selector: 'dialog-editar-tema',
  template: `
    <h1 mat-dialog-title>Editar Tema</h1>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Título</mat-label>
        <input matInput [(ngModel)]="data.titulo" required />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Descripción</mat-label>
        <input matInput [(ngModel)]="data.descripcion" required />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancelar</button>
      <button mat-button [mat-dialog-close]="data">Guardar</button>
    </div>
  `,
})
export class EditarTemaDialog {
  constructor(
    public dialogRef: MatDialogRef<EditarTemaDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Tema
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}