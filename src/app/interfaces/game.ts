export interface Game {
    name: string;
    platform: string;
    genre: string;
    releaseDate?: string;
    players: number;
    publisher: string;
    boxArt: HTMLImageElement;
}
