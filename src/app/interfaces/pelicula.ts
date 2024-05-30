export interface Pelicula {
    id:number;
    nombre:string;
    tipo: 'terror' | 'comedia' | 'amor' | 'otros';
    fechaEstreno:Date;
    cantidadPublico:number;
    foto:string;
    actorParticipante: string;
}