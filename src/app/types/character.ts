import { Location } from "./location";

export class Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    url: string;
    origin: Location;
    location: Location;
    episode: string[];
    created: string;
}