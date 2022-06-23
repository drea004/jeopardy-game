export class Clue{
    id: number | undefined; 
    answer?: string; 
    question?: string; 
    value: number | undefined; 
    airdate?: Date; 
    category?: Category; 

}

export class Category{
    title?: string; 
}

