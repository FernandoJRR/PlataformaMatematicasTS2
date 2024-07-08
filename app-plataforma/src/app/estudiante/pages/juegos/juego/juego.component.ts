import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';
import { ActivatedRoute, Router } from '@angular/router';
import { JuegoService } from '../juego.service';
import { GlobalsService } from '../../../../globals/globals.service';
import { Partida } from '../../../../interfaces/partida.interface';
import { PartidaService } from '../../../services/partida.service';
//import { error } from 'console';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
})
export class JuegoComponent implements OnInit, OnDestroy {
  @Input() ejercicios: Ejercicio[] = [];
  currentEjercicioIndex: number = 0;
  tiempoRestante: number = 0; // Tiempo calculado en segundos
  interval: any;
  juegoIniciado: boolean = false;
  modoContrarreloj: boolean = false;
  modoSeleccionado: string = 'normal';
  modo: number = 1;
  correctas: number = 0;
  incorrectas: number = 0;
  puntaje: number = 0;
  esCorrecta:boolean=false;
  partida!: Partida;

  receivedEjercicios!: Ejercicio[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private juegoService: JuegoService,
    private globals: GlobalsService,
    private partidaService: PartidaService
  ) {}

  ngOnInit() {
    // Usar datos simulados si no se proporcionan ejercicios
    this.route.params.subscribe((params) => {
      if (params['data'] && params['modo']) {
        this.receivedEjercicios = JSON.parse(params['data']) as Ejercicio[];
        this.modoSeleccionado = params['modo'] as string;
      }
    });
    if (!this.ejercicios || this.ejercicios.length === 0) {
      //this.ejercicios = this.generarDatosSimulados();
      this.ejercicios = this.receivedEjercicios;
    }
    this.calcularTiempoTotal();
    this.iniciarJuego();
  }

  

  iniciarJuego() {
    this.juegoIniciado = true;
    this.juegoService.setTotalEjercicios(this.ejercicios.length);

    if (this.modoSeleccionado === 'contrarreloj') {
      this.modoContrarreloj = true;
      this.modo = 1;
      this.iniciarTemporizador();
      this.modoSeleccionado='Contra-Reloj';
    } else if (this.modoSeleccionado === 'invencible') {
      this.modoContrarreloj = false;
      this.modo = 1;
      this.modoSeleccionado='Invencible';
    }else {
      this.modoContrarreloj = false;
      this.modoSeleccionado='Normal';
    }
  }

  calcularTiempoTotal() {
    this.tiempoRestante = this.ejercicios.reduce((acc, ejercicio) => {
      if (ejercicio.id_tipo_ejercicio === 1) {
        return acc + 8;
      } else if (ejercicio.id_tipo_ejercicio === 3) {
        return acc + 4;
      } else if (ejercicio.id_tipo_ejercicio === 2) {
        return acc + 13;
      }
      return acc;
    }, 0);
  }

  get currentEjercicio(): Ejercicio | null {
    return this.ejercicios.length > 0
      ? this.ejercicios[this.currentEjercicioIndex]
      : null;
  }

  siguienteEjercicio(event?: { correcta: boolean }) {
    //en este metodo podemos saber si la pregunta es correcta o incorrecta
    if (this.modoSeleccionado == 'invencible') {
      if (this.juegoService.getCorrecta()!) {
        alert('¡Modo invensible termindado !');
        this.detenerTemporizador();
        this.mostrarResultados();
      }
    }

    if (this.currentEjercicioIndex < this.ejercicios.length - 1) {
      this.currentEjercicioIndex++;
    } else {
      alert('¡Juego completado!');
      this.detenerTemporizador();
      this.mostrarResultados();
    }
  }

  anteriorEjercicio() {
    if (this.currentEjercicioIndex > 0) {
      this.currentEjercicioIndex--;
    }
  }

  iniciarTemporizador() {
    this.interval = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        this.detenerTemporizador();
        alert('¡Se acabó el tiempo!');
        alert(`Resultados:
          Total de preguntas: ${this.ejercicios.length}
          Respuestas correctas: ${this.juegoService.getCorrectas()}
          Solo contesto: ${
            this.ejercicios.length - this.juegoService.getCorrectas()
          }
          Puntaje: ${this.juegoService.calcularPuntaje()}`);
        this.mostrarResultados();
      }
    }, 1000);
  }

  detenerTemporizador() {
    clearInterval(this.interval);
  }

  ngOnDestroy() {
    this.detenerTemporizador();
  }

  mostrarResultados() {
    const totalPreguntas = this.ejercicios.length;
    this.puntaje = Math.round((this.correctas / totalPreguntas) * 100);
    alert(`Resultados:
      Respuestas correctas: ${this.juegoService.getCorrectas()}
      Respuestas incorrectas: ${this.juegoService.getInCorrectas()}
      Puntaje: ${this.juegoService.calcularPuntaje()}`);
    this.puntaje = this.juegoService.calcularPuntaje();

    this.router.navigate(['/estudiante/resultados'], {
      state: {
        modoJuego: this.modoSeleccionado,
        correctas: this.juegoService.getCorrectas(),
        incorrectas: this.juegoService.getInCorrectas(),
        puntaje: this.puntaje,
        ejercicios: this.ejercicios,
      },
    });
    this.guardarPartida();
  }

  guardarPartida() {
    this.partida = {
      username_jugador: this.globals.getUser().username,
      id_modo_juego: this.modo,
      puntaje: this.puntaje,
      ejercicio_partida: this.juegoService.getEjerciciosPartida(),
    };
    this.juegoService.resetearEstadisticas();
    //llamar a servico de partidas, y el metodo guardar partida (aun falta xd)
    this.partidaService.guardarPartida(this.partida)
    .subscribe((data) => {
      console.log('partida guardada');
    }, (error)=>{
      console.log('partida guardada');
    });
  }

  guardarEjercicioPartida(ejercicio: Ejercicio) {
    const EjercicioPartidax = {
      id_ejercicio: ejercicio.id,
      id_partida: 0,
      resuelto_satisfactoriamente: true,
    };
  }
}
