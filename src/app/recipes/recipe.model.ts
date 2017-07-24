export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {//constructor argument name,argument pass gareko
        this.name = name;
        this.description = desc;//initialize gareko
        this.imagePath = imagePath;
    }
}