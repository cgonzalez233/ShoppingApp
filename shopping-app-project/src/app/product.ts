export interface IProduct{
    id: number,
    title: String,
    price: number,
    description: String,
    category: String,
    image: any,
    rating: Map<string, number>[]
}