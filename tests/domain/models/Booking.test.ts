import { Booking } from '../../../src/domain/models/Booking';

describe('Booking Model', () => {
  describe('constructor', () => {
    it('should create a booking with all properties', () => {
      const booking = new Booking('001', 'Budi', 'R001', 'BOOKED', 5);

      expect(booking.id).toBe('001');
      expect(booking.passengerName).toBe('Budi');
      expect(booking.routeId).toBe('R001');
      expect(booking.status).toBe('BOOKED');
      expect(booking.flightDay).toBe(5);
    });
  });

  describe('booking status', () => {
    it('should handle BOOKED status', () => {
      const booking = new Booking('004', 'Adi', 'R005', 'BOOKED', 2);
      expect(booking.status).toBe('BOOKED');
    });

    it('should handle DEPARTED status', () => {
      const booking = new Booking('005', 'Agus', 'R006', 'DEPARTED', 4);
      expect(booking.status).toBe('DEPARTED');
    });

    it('should handle ARRIVED status', () => {
      const booking = new Booking('006', 'Fajar', 'R007', 'ARRIVED', 6);
      expect(booking.status).toBe('ARRIVED');
    });
  });
});
