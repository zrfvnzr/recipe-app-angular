export class RecipeModel {

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public imagePath: string,
        public ingredients: any[]
    ) {}
    
}