/// <reference types="node" />
export declare class DragonSaysLikeAboutSomething {
    readonly HEIGHT = 900;
    readonly WIDTH = 1600;
    readonly BASE_IMAGE_PATH = "./assets/dragon.jpg";
    readonly FONT_PATH = "./assets/fonts/lefthand_her_free.otf";
    private ctx;
    private text;
    constructor(text: string);
    draw(): Promise<Buffer>;
}
