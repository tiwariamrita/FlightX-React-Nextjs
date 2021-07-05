export interface FlightData {
  id: string;
  flightNumber: string;
  airline: string;
  takeoff: string;
  landing: string;
  duration: number;
  price: number;
  currencyCode: string;
  departureAirport: string;
  arrivalAirport: string;
}
export let airlines: any = {
  "airlines/AF": {
    name: "Air France",
  },
  "/airlines/LH": {
    name: "Lufthansa",
  },
};

export let airports: any = {
  "/airports/CDG": {
    city: "Paris",
    name: "Charles de Gaulle",
  },
  "/airports/JFK": {
    city: "New York",
    name: "John F. Kennedy",
  },
  "/airports/ORY": {
    city: "Paris",
    name: "Paris Orly",
  },
};

export let flights: Array<FlightData> = [
  {
    id: "flight-1",
    flightNumber: "AF 456",
    airline: "/airlines/AF",
    takeoff: "17:45",
    landing: "20:00",
    duration: 495,
    price: 39999,
    currencyCode: "EUR",
    departureAirport: "/airports/CDG",
    arrivalAirport: "/airports/JFK",
  },
  {
    id: "flight-2",
    flightNumber: "AF 765",
    airline: "/airlines/AF",
    takeoff: "19:45",
    landing: "22:00",
    duration: 495,
    price: 39999,
    currencyCode: "EUR",
    departureAirport: "/airports/CDG",
    arrivalAirport: "/airports/JFK",
  },
  {
    id: "flight-3",
    flightNumber: "LH 123",
    airline: "/airlines/LH",
    takeoff: "12:00",
    landing: "14:30",
    duration: 510,
    price: 41000,
    currencyCode: "EUR",
    departureAirport: "/airports/ORY",
    arrivalAirport: "/airports/JFK",
  },
  {
    id: "flight-4",
    flightNumber: "LH 123",
    airline: " Lufthansa",
    takeoff: "12:00",
    landing: "14:30",
    duration: 510,
    price: 40000,
    currencyCode: "EUR",
    departureAirport: "ORY",
    arrivalAirport: "JFK",
  },
];
