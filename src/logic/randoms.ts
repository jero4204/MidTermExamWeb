export function getRandomInt(min: number, max: number): number {
    // Asegurarse de que min y max sean enteros
    min = Math.ceil(min);
    max = Math.floor(max);
    
    // Generar el número aleatorio
    return Math.floor(Math.random() * (max - min + 1)) + min;
}