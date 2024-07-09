import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Temario } from '../../../interfaces/temario.interface';
import { TemarioService } from '../../services/temario.service';
import { GlobalsService } from '../../../globals/globals.service';

@Component({
  selector: 'app-editar-temario',
  templateUrl: './editar-temario.component.html',
  styleUrls: ['./editar-temario.component.css']
})
export class EditarTemarioComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  temarioFormGroup: FormGroup;
  informacionFormGroup: FormGroup;
  temarios: Temario[] = [];
  dataSource = new MatTableDataSource<Temario>();
  temarioControl = new FormControl<Temario | null>(null, Validators.required);
  displayedColumns: string[] = ['id', 'titulo', 'descripcion', 'acciones'];

  constructor(
    private _formBuilder: FormBuilder,
    private temarioService: TemarioService,
    private globalsService: GlobalsService
  ) {
    this.temarioFormGroup = this._formBuilder.group({
      tema: this.temarioControl
    });

    this.informacionFormGroup = this._formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.cargarTemarios();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cargarTemarios() {
    const profesor: string = this.globalsService.getUser().username;
    this.temarioService.obtenerListaTemariosProfesor(profesor).subscribe({
      next: (response: Temario[]) => {
        this.temarios = response;
        this.dataSource.data = this.temarios;
      },
      error: (error) => {
        console.error('Error al cargar temarios', error);
      }
    });
  }

  onTemarioSelect() {
    const selectedTemario = this.temarioControl.value;
    if (selectedTemario) {
      this.informacionFormGroup.patchValue({
        titulo: selectedTemario.titulo,
        descripcion: selectedTemario.descripcion
      });
    }
  }

  guardarTemario() {
    if (this.informacionFormGroup.invalid) {
      this.informacionFormGroup.markAllAsTouched();
      return;
    }

    const nuevoTemario: Temario = {
      titulo: this.informacionFormGroup.value.titulo,
      descripcion: this.informacionFormGroup.value.descripcion,
      username_creador: this.globalsService.getUser().username,
      fecha_creacion: new Date().toISOString(),
      temas: []
    };

    this.temarioService.crearTemario(nuevoTemario).subscribe({
      next: (response) => {
        console.log('Temario creado correctamente');
        this.cargarTemarios();
        this.stepper.reset();
      },
      error: (error) => {
        console.error('Error al crear el temario', error);
      }
    });
  }

  editarTemario(temario: Temario) {
    this.temarioControl.setValue(temario);
    this.informacionFormGroup.patchValue({
      titulo: temario.titulo,
      descripcion: temario.descripcion
    });
    this.stepper.next();
  }

  // eliminarTemario(id: number) {
  //   this.temarioService.eliminarTemario(id).subscribe({
  //     next: () => {
  //       console.log('Temario eliminado correctamente');
  //       this.cargarTemarios();
  //     },
  //     error: (error) => {
  //       console.error('Error al eliminar el temario', error);
  //     }
  //   });
  // }
}
