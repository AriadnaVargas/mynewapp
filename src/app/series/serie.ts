export class Serie {

    id: number;
    name: string;
    channel: string;
    seasons: number;
    sinopsis:string;
    link: string;
    img: string;

    public constructor(id: number, name: string, channel: string, seasons: number, sinopsis: string, link: string, img: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.sinopsis = sinopsis;
        this.link = link;
        this.img = img;
    }

}
