export interface Location {
  id: number;
  latitude: number;
  longitude: number;
  accuracy: number;
  speed: number;
}

export interface Position {
  coords: Coordinates;
  timestamp: number
}

export interface Coordinates {
  latitude: number;
  longitude: number;
  accuracy: number;
  speed: number;
}
