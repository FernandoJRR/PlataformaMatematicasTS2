import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ejercicio } from '../../../interfaces/ejercicio';
import { Tema } from '../../../interfaces/tema.interface';
import { TemarioService } from '../../services/temario.service';
import { Temario } from '../../../interfaces/temario.interface';
import { GlobalsService } from '../../../globals/globals.service';

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-editar-tema',
  templateUrl: './editar-tema.component.html',
  styleUrl: './editar-tema.component.css',
})
export class EditarTemaComponent {
  //Seccion: Tab
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  //Seccion: Stepper
  //Select de Temarios (multi-select)
  temarioControl = new FormControl<Temario | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  //Tabla de Temarios
  displayedColumns: string[] = ['id', 'titulo', 'descripcion'];
  dataSource = new MatTableDataSource<Tema>();

  //Crear Tema
  temarios!: Temario[];

  //Constructor
  constructor(
    private _formBuilder: FormBuilder,
    private _liveAnnouncer: LiveAnnouncer,
    private globalsService: GlobalsService,
    private temarioService: TemarioService
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

  //Asignar valor del Select al temarioControl
  onTemarioChange(selectedTemario: Temario) {
    this.temarioControl.setValue(selectedTemario);
    this.cargarTemas();
  }

  //Obtener lista de Temas del Temario seleccionado
  cargarTemas() {
    const selectedTemario = this.temarioControl.value;
    
    console.log(selectedTemario);
    console.log(this.dataSource.data);
    //this.dataSource.data = this.temarioControl.value?.temas;

    if (selectedTemario && selectedTemario.temas) {
      this.dataSource.data = selectedTemario.temas;

      console.log(this.dataSource.data)

      this.dataSource = new MatTableDataSource(this.temarioControl.value?.temas);
      /*this.temarioControl.value?.temas.forEach(element => {
    });*/
    }
  }
}
