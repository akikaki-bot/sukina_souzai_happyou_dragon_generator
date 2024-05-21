import {
    createCanvas,
    loadImage,
    CanvasRenderingContext2D,
    registerFont
} from "canvas";

export class DragonSaysLikeAboutSomething {

    public readonly HEIGHT = 900;
    public readonly WIDTH = 1600;
    public readonly BASE_IMAGE_PATH = "./assets/dragon.jpg";
    public readonly FONT_PATH = "./assets/fonts/lefthand_her_free.otf";

    private ctx : CanvasRenderingContext2D;

    private text : string

    constructor( text : string ){
        registerFont( this.FONT_PATH, { family: "left-handed_girlfriend" })
        const canvas = createCanvas(this.WIDTH, this.HEIGHT)
        this.ctx = canvas.getContext("2d");
        this.text = text
    }

    async draw(){
        const image = await loadImage(this.BASE_IMAGE_PATH);
        this.ctx.drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
        this.ctx.font = '60px "Noto Sans JP"';
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
            this.text.split('')
                .reduce( 
                    (acc : string[], c, i ) =>  
                        i % 8 ? acc 
                              : [...acc, this.text.split('').slice( i, i + 8 ).join('') ], [] 
                    )
                .join('\n'), 
            ( 375 + ( this.text.length > 6 ? this.text.length > 12 ? this.text.length : this.text.length * 5 : this.text.length * 12) ), 
            ( this.text.length > 6 ? ( 200 + ( 250 * this.text.length % 8 )) : ( this.HEIGHT / 2 - 100 ) )
        );
        return this.ctx.canvas.toBuffer();
    }
}