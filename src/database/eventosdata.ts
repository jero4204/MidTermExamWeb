import { Evento } from "../models/eventos";

export const eventosData: Evento[]=[
    {
        id: 1,
        nombre: "Expobelleza",
        fecha: "11/09/2024",
        lugar: "Casa de la CareCortada",
        modelos: [
            {
                id: 2,
                nombre: "Gigi Hadid",
                edad: 29,
                añosExperiencia: 20,
                estatura: 1.80,
                imagen: "hadid1.jpg"
            },
            {
                id: 3,
                nombre: "Bella Hadit",
                edad: 27,
                añosExperiencia: 10,
                estatura: 1.75,
                imagen: "bella1.jpg"
            },
            {
                id: 4,
                nombre: "Barbara Palvin",
                edad: 30,
                añosExperiencia: 22,
                estatura: 1.75,
                imagen: "barbara1.jpg"
            }
        ],
        productos: [
            {
                id: 1,
                tipoMaquillaje: "Pestañia",
                precio: 55000,
                nombre: "Better than sex",
                marca: "Too Face",
                imagen: "BetherThanSexPestanina.png"
            },
            {
                id: 2,
                tipoMaquillaje: "Base",
                precio: 253000,
                nombre: "Born this way",
                marca: "Too Face",
                imagen: "BornThisWayBase.png"
            },
            {
                id: 3,
                tipoMaquillaje: "Corrector",
                precio: 58900,
                nombre: "Shape tape",
                marca: "Tarte",
                imagen: "ShapeTapeCorrector.png"
            }
        ],
        valorEntrada: 30000
    },
    {
        id: 2,
        nombre: "ColombiaModa",
        fecha: "20/11/2024",
        lugar: "PlazaMayor",
        modelos: [
            {
                id: 1,
                nombre: "Kendall Jenner",
                edad: 28,
                añosExperiencia: 18,
                estatura: 1.80,
                imagen : "Kendall1.webp"
            },
            {
                id: 2,
                nombre: "Gigi Hadid",
                edad: 29,
                añosExperiencia: 20,
                estatura: 1.80,
                imagen: "hadid1.jpg"
            },
            {
                id: 3,
                nombre: "Bella Hadit",
                edad: 27,
                añosExperiencia: 10,
                estatura: 1.75,
                imagen: "bella1.jpg"
            }
        ],
        productos: [
            {
                id: 4,
                tipoMaquillaje: "Rubor",
                precio: 110000,
                nombre: "Hope",
                marca: "Rare Beauty",
                imagen: "rarebeauty.png"
            },
            {
                id: 5,
                tipoMaquillaje: "Rubor",
                precio: 70000,
                nombre: "On the glow",
                marca: "Pixi",
                imagen: "OnTheGlowRubor.jpg"
            },
            {
                id: 6,
                tipoMaquillaje: "Iluminador",
                precio: 30000,
                nombre: "Sublime",
                marca: "Atenea",
                imagen: "SublimeIluminador.jpeg"
            },
            {
                id: 7,
                tipoMaquillaje: "Esponjas",
                precio: 7000,
                nombre: "Beauty blender",
                marca: "Atenea",
                imagen: "BeautyBlenderEsponja.jpg"
            }
        ],
        valorEntrada: 70000
    },
    {
        id: 3,
        nombre: "Bellos y Bellas 2024",
        fecha: "09/12/2024",
        lugar: "La Macarena",
        modelos: [
            {
                id: 4,
                nombre: "Barbara Palvin",
                edad: 30,
                añosExperiencia: 22,
                estatura: 1.75,
                imagen: "barbara1.jpg"
            },
            {
                id: 5,
                nombre: "Virginia Gardner",
                edad: 29,
                añosExperiencia: 13,
                estatura: 1.73,
                imagen: "virginia1.jpg"
            },
            {
                id: 6,
                nombre: "Cara Delevingne",
                edad: 32,
                añosExperiencia: 15,
                estatura: 1.73,
                imagen: "delevingne1.jpg"
            }
        ],
        productos: [
            {
                id: 7,
                tipoMaquillaje: "Esponjas",
                precio: 7000,
                nombre: "Beauty blender",
                marca: "Atenea",
                imagen: "BeautyBlenderEsponja.jpg"
            },
            {
                id: 8,
                tipoMaquillaje: "Brochas",
                precio: 87000,
                nombre: "Kit de brochas",
                marca: "Ani-K",
                imagen: "KitBrochas.webp"
            },
            {
                id: 9,
                tipoMaquillaje: "Labial",
                precio: 42000,
                nombre: "Super stay",
                marca: "Mabelink",
                imagen: "SuperStayLabial.jpeg"
            }
        ],
        valorEntrada: 0
    }
]