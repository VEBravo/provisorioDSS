import Moneda from './enums.ts'
class Alojamiento {
    
    #anfitrion
    #nombre
    #descripcion
    #precioPorNoche
    #moneda
    #horarioCheckIn
    #horarioCheckOut
    #direccion
    #cantHuespedMax
    #caracteristicas
    #reservas
    #fotos

    constructor(anfitrion, nombre, descripcion, precioPorNoche, moneda, horarioCheckIn, 
        horarioCheckOut, direccion, cantHuespedMax, caracteristicas, reservas, fotos) {
        this.#anfitrion = anfitrion
        this.#nombre = nombre
        this.#descripcion = descripcion
        this.#precioPorNoche = precioPorNoche
        this.#moneda = moneda
        this.#horarioCheckIn = horarioCheckIn
        this.#horarioCheckOut = horarioCheckOut
        this.#direccion = direccion
        this.#cantHuespedMax = cantHuespedMax
        this.#caracteristicas = caracteristicas
        this.#reservas = reservas
        this.#fotos = fotos
    }

    get anfitrion (){
        return this.#anfitrion
    }
    get nombre (){
        return this.#nombre
    }
    get descripcion (){
        return this.#descripcion
    }
    get precioPorNoche (){
        return this.#precioPorNoche
    }
    get moneda (){
        return this.#moneda
    }
    get horarioCheckIn (){
        return this.#horarioCheckIn
    }
    get horarioCheckOut (){
        return this.#horarioCheckOut
    }
    get direccion (){
        return this.#direccion
    }
    get cantHuespedMax (){
        return this.#cantHuespedMax
    }
    get caracteristicas (){
        return this.#caracteristicas
    }
    get reservas (){
        return this.#reservas
    }
    get fotos (){
        return this.#fotos
    }

    estasDisponibleEn(rangoDeFechas){
        
    }
    
    tuPrecioEstaDentroDe(valorMinimo, valorMaximo) {
        return valorMinimo <= this.#precioPorNoche && valorMaximo >= this.#precioPorNoche
    }

    tenesCaracteristica(caracteristica){
        return this.#caracteristicas.includes(caracteristica)
    }

    puedenAlojarse(cantHuespedes){
        const cantDisponibles = this.#cantHuespedMax - this.#reservas.length()
        return cantHuespedes <= cantDisponibles
    }
}


class RangoFechas {
    #fechaInicio
    #fechaFin
    
    constructor(fechaInicio, fechaFin) {
        this.#fechaInicio = fechaInicio,
        this.#fechaFin = fechaFin
    }
    
    get fechaInicio(){
        return this.#fechaInicio
    }
    get fechaFin(){
        return this.#fechaFin
    }
}

class Direccion {
    #calle
    #altura
    #ciudad
    #latitud
    #longitud
    
    constructor(calle, altura, ciudad, latitud, longitud) {
        this.calle = calle
        this.altura = altura
        this.ciudad = ciudad
        this.latitud = latitud
        this.longitud = longitud
    }

    get calle() {
        return this.#calle
    }
    
    get altura() {
        return this.#altura
    }

    get ciudad() {
        return this.#ciudad
    }
    
    get latitud() {
        return this.#latitud
    }
    
    get longitud() {
        return this.#longitud
    }
    
}

class Ciudad {
    #nombre
    #pais
    
    constructor (nombre, pais){
        this.#nombre = nombre
        this.#pais = pais
    }
    
    get nombre() {
        return this.#nombre
    }

    get pais() {
        return this.#pais
    }
}

class Pais {
    #nombre
    
    constructor (nombre){
        this.#nombre = nombre
    }
    
    get nombre() {
        return this.#nombre
    }
}

class CambioEstadoReserva {
    #fecha
    #estado
    #reserva
    #motivo
    #usuario

    constructor (fecha, estado, reserva, motivo, usuario) {
        this.#fecha = fecha
        this.#estado = estado
        this.#reserva = reserva
        this.#motivo = motivo
        this.#usuario = usuario
    }

    get fecha() {
        return this.#fecha
    }
    
    get estado() {
        return this.#estado
    }
    
    get reserva() {
        return this.#reserva
    }

    get motivo() {
        return this.#motivo
    }
    
    get usuario() {
        return this.#usuario
    }
}


class Reserva {
    #fechaAlta
    #huesped
    #alojamiento
    #rangoFechas
    #estado
    #precioPorNoche
    
    constructor (fechaAlta,huesped,alojamiento,rangoDeFechas,precioPorNoche){
        this.#fechaAlta = fechaAlta
        this.#huesped = huesped
        this.#alojamiento = alojamiento
        this.#rangoFechas = rangoDeFechas
        this.#precioPorNoche = precioPorNoche
    }

    actualizarEstado(estadoReserva){
        this.estado(estadoReserva)
    }

    get estado(){
        return this.#estado
    }
    
    set estado(nuevoEstado){
        this.#estado = nuevoEstado
    }
}

class FactoryNotificacion {
    #crearMensajeSegunEstadoReserva(estado){
        // TODO
        return true
    }
    crearSegunReserva(reserva){
        // TODO
        return true
    }
}

class Notificacion {
    
    #mensaje
    #usuario
    #fechaAlta
    #leida
    #fechaLeida
    
    constructor(mensaje, usuario, fechaAlta, leida, fechaLeida) {
        this.#mensaje = mensaje
        this.#usuario = usuario
        this.#fechaAlta = fechaAlta
        this.#leida = leida
        this.#fechaLeida = fechaLeida
    }
    
    get mensaje(){
        return this.#mensaje
    }
    
    get usuario() {
        return this.#usuario
    }
    
    get fechaAlta(){
        return this.#fechaAlta
    }

    get leida() {
        return this.#leida
    }
    
    get fechaLeida() {
        return this.#fechaLeida
    }
    
}


class Foto {
    #descripcion
    #path
    
    constructor (descripcion, path){
        this.#descripcion = descripcion
        this.#path = path
    }

    get descripcion() {
        return this.#descripcion
    }
    get path() {
        return this.#path
    }
}

class Usuario {
    #nombre
    #email
    #tipo
    
    constructor (nombre, email, tipo ){
        this.#nombre = nombre
        this.#email = email
        this.#tipo = tipo
    }

    get nombre() {
        return this.#nombre
    }

    get email() {
        return this.#email
    }

    get tipo() {
        return this.#tipo
    }
}