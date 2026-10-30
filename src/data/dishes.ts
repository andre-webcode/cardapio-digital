import { Dish } from "@/types/dish";

const dishes: Dish[] = [
    {
        id: "1",
        name: "Bruschetta Italiana",
        description: "Pão artesanal, tomate fresco, manjericão e azeite.",
        price: "R$ 24,90",
        category: "Entradas",
        image: require("../../assets/bruschetta.jpg"),
    },
    {
        id: "2",
        name: "Crostini de Queijo",
        description: "Pão crocante, queijo derretido e ervas frescas.",
        price: "R$ 22,90",
        category: "Entradas",
        image: require("../../assets/crostini.jpg"),
    },
    {
        id: "3",
        name: "Risoto de Cogumelos",
        description: "Arroz cremoso, cogumelos frescos e parmesão.",
        price: "R$ 38,90",
        category: "Pratos principais",
        image: require("../../assets/risoto-cogumelo.jpg"),
    },
    {
        id: "4",
        name: "Filé ao Molho Madeira",
        description: "Filé grelhado, molho madeira e acompanhamento especial.",
        price: "R$ 49,90",
        category: "Pratos principais",
        image: require("../../assets/file-molho-madeira.jpg"),
    },
    {
        id: "5",
        name: "Massa ao Pesto",
        description: "Massa artesanal com molho pesto e parmesão.",
        price: "R$ 36,90",
        category: "Pratos principais",
        image: require("../../assets/massa-pesto.jpg"),
    },
    {
        id: "6",
        name: "Cheesecake de Frutas Vermelhas",
        description: "Cheesecake cremoso com cobertura de frutas vermelhas.",
        price: "R$ 18,90",
        category: "Sobremesas",
        image: require("../../assets/cheesecake.jpg"),
    },
    {
        id: "7",
        name: "Brownie com Chocolate",
        description: "Brownie de chocolate com textura macia e intensa.",
        price: "R$ 16,90",
        category: "Sobremesas",
        image: require("../../assets/brownie.jpg"),
    },
];

export default dishes;