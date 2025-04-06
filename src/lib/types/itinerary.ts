
export enum Mode {
    Bus = 'bus',
    Train = 'train',
    Car = 'car',
    Bike = 'bike',
    Walk = 'walk',
    Boat = 'boat',
}

export interface Leg {
    mode: Mode;
    duration: number; // in minutes
    from: {
        name: string;
        lat: number;
        lon: number;
    };
    to: {
        name: string;
        lat: number;
        lon: number;
    };
}

export interface Itinerary {
    legs: Leg[];
    totalDuration: number; // in minutes
}