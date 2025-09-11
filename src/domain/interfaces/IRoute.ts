export interface IRoute {
    readonly id: string;
    readonly destinationCity: string;
    readonly departureCity: string;
    readonly scheduledDay: string;
    readonly flightId: string;
}
