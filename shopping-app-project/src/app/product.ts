export interface IProduct{
    id: number,
    title: String,
    price: number,
    description: String,
    category: String,
    image: String,
    rating: Map<string, number>[]
}