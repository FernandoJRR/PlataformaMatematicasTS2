import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';
import { ActivatedRoute } from '@angular/router';
import { JuegoService } from '../juego.service';
import { GlobalsService } from '../../../../globals/globals.service';
import { EjercicioPartidax } from '../../../../interfaces/ejercicio_partida.interface';


@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit, OnDestroy {
  @Input() ejercicios: Ejercicio[] = [];
  currentEjercicioIndex: number = 0;
  tiempoRestante: number = 0; // Tiempo calculado en segundos
  interval: any;
  juegoIniciado: boolean = false;
  modoContrarreloj: boolean = false;
  modoSeleccionado: string = 'normal';
  modo:number=1;
  correctas: number= 0;
  incorrectas: number= 0 ;
  puntaje: number = 0;
  esCorrecta:boolean=false;

  receivedEjercicios!: Ejercicio[];

  constructor(private route: ActivatedRoute, 
              private juegoService: JuegoService,
            private globals: GlobalsService) { }

  ngOnInit() {
    // Usar datos simulados si no se proporcionan ejercicios
    this.route.params.subscribe(params => {
      if (params['data'] && params['modo'] ) {
        this.receivedEjercicios = JSON.parse(params['data']) as Ejercicio[];
        this.modoSeleccionado = params['modo'] as string;
      }
      
    });
    if (!this.ejercicios || this.ejercicios.length === 0) {
      //this.ejercicios = this.generarDatosSimulados();
      this.ejercicios=this.receivedEjercicios
    }
    this.calcularTiempoTotal();
    this.iniciarJuego()
  }

  iniciarJuego() {
    this.juegoIniciado = true;
    this.juegoService.setTotalEjercicios(this.ejercicios.length);

    if (this.modoSeleccionado === 'contrarreloj') {
      this.modoContrarreloj = true;
      this.modo=1;
      this.iniciarTemporizador();
    } else {
      this.modoContrarreloj = false;
    }
  }

  calcularTiempoTotal() {
    this.tiempoRestante = this.ejercicios.reduce((acc, ejercicio) => {
      if (ejercicio.id_tipo_ejercicio === 1 ) {
        return acc + 8;
      }else if (ejercicio.id_tipo_ejercicio === 3) {
        return acc + 4;
      } else if (ejercicio.id_tipo_ejercicio === 2) {
        return acc + 13;
      }
      return acc;
    }, 0);
  }

  get currentEjercicio(): Ejercicio | null {
    return this.ejercicios.length > 0 ? this.ejercicios[this.currentEjercicioIndex] : null;
  }

  siguienteEjercicio(event?: { correcta: boolean }) {
    alert("siguiente ejercicio");
    if (event!) {
      alert("siguiente ejercicio2");
      alert('event')
      if (event.correcta) {
        this.correctas++;
        alert("sumando correcta");
        console.log("sumando correcta");
      } else {
        this.incorrectas++;
        alert("sumando incorrecta");
        alert("sumando incorrecta");
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

  generarDatosSimulados(): Ejercicio[] {
    return [
      {
        id_tipo_ejercicio: 1,
        id_dificultad: 1,
        anotacion: 'Primera pregunta',
        id_tema: 0,
        data_json: { pregunta: '¿Cuál es la capital de Francia?', respuesta: 'París' },
        fecha_creacion: new Date().toISOString(),
        fecha_modificacion: new Date().toISOString()
      },
      {
        id_tipo_ejercicio: 1,
        id_dificultad: 1,
        anotacion: 'Segunda pregunta',
        id_tema: 0,
        data_json: { pregunta: '¿Cuál es el río más largo del mundo?', respuesta: 'Nilo' },
        fecha_creacion: new Date().toISOString(),
        fecha_modificacion: new Date().toISOString()
      },
      {
        id_tipo_ejercicio: 2,
        id_dificultad: 1,
        anotacion: 'Unir parejas',
        id_tema: 0,
        data_json: {
          parejasIzquierda: ['Fuente', 'Estuario', 'Tributario'],
          parejasDerecha: ['Toda el área drenada por un río.', 'Escurrimiento de aguas en una red hidrográfica.', 'Lugar donde comienza un río.']
        },
        fecha_creacion: new Date().toISOString(),
        fecha_modificacion: new Date().toISOString()
      },
      {
        id_tipo_ejercicio: 3,
        id_dificultad: 1,
        anotacion: 'Opción múltiple',
        id_tema: 0,
        data_json: {
          pregunta: '¿Cuál es el océano más grande del mundo?',
          opciones: ['Océano Atlántico', 'Océano Índico', 'Océano Pacífico', 'Océano Ártico'],
          respuestaCorrecta: 'Océano Pacífico'
        },
        fecha_creacion: new Date().toISOString(),
        fecha_modificacion: new Date().toISOString()
      }
    ];
  }

  mostrarResultados() {
    const totalPreguntas = this.ejercicios.length;
    this.puntaje = Math.round((this.correctas / totalPreguntas) * 100);
    alert(`Resultados:
      Respuestas correctas: ${this.juegoService.getCorrectas()}
      Respuestas incorrectas: ${this.juegoService.getInCorrectas()}
      Puntaje: ${this.juegoService.calcularPuntaje(this.juegoService.getCorrectas()+this.juegoService.getInCorrectas())}`);
      
      this.juegoService.resetearEstadisticas();
      this.guardarPartida();
    }


    guardarPartida(){
      const partida = {
        puntaje: this.puntaje,
        username_jugador: this.globals.getUser().username,
        id_modo_juego: this.modo
      }
      //llamar a servico de partidas, y el metodo guardar partida (aun falta xd)
    }

    guardarEjercicioPartida(ejercicio: Ejercicio){
      const EjercicioPartidax = {
        id_ejercicio: ejercicio.id,
        id_partida: 0,
        resuelto_satisfactoriamente: true
      }
    }
  
}
