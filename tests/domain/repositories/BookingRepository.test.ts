import { Booking } from '../../../src/domain/models/Booking';
import { BookingRepository } from '../../../src/domain/repositories/BookingRepository';

describe('BookingRepository', () => {
  let bookingRepository: BookingRepository;

  beforeEach(() => {
    bookingRepository = new BookingRepository();
  });

  describe('create', () => {
    it('should create and store a booking', () => {
      const booking = new Booking('B001', 'Fajar', 'R001', 'BOOKED', 5);

      const result = bookingRepository.create(booking);

      expect(result).toBe(booking);
      expect(bookingRepository.findById('B001')).toBe(booking);
    });
  });

  describe('findAll', () => {
    it('should return empty array when no bookings exist', () => {
      const bookings = bookingRepository.findAll();

      expect(bookings).toEqual([]);
    });

    it('should return all bookings', () => {
      const booking1 = new Booking('B001', 'Agus', 'R001', 'BOOKED', 5);
      const booking2 = new Booking('B002', 'Adi', 'R002', 'DEPARTED', 3);

      bookingRepository.create(booking1);
      bookingRepository.create(booking2);

      const bookings = bookingRepository.findAll();

      expect(bookings).toHaveLength(2);
      expect(bookings).toContain(booking1);
      expect(bookings).toContain(booking2);
    });
  });

  describe('findById', () => {
    it('should return booking when found', () => {
      const booking = new Booking('B003', 'Bob', 'R003', 'ARRIVED', 7);
      bookingRepository.create(booking);

      const result = bookingRepository.findById('B003');

      expect(result).toBe(booking);
    });

    it('should return undefined when not found', () => {
      const result = bookingRepository.findById('B999');

      expect(result).toBeUndefined();
    });
  });

  describe('findByPassengerName', () => {
    beforeEach(() => {
      bookingRepository.create(
        new Booking('B001', 'Agus', 'R001', 'BOOKED', 5)
      );
      bookingRepository.create(
        new Booking('B002', 'Budi', 'R002', 'DEPARTED', 3)
      );
      bookingRepository.create(
        new Booking('B003', 'Caca', 'R003', 'ARRIVED', 7)
      );
    });

    it('should return all bookings for specific passenger', () => {
      const bookings = bookingRepository.findByPassengerName('Agus');

      expect(bookings).toHaveLength(1);
      expect(bookings.every(b => b.passengerName === 'Agus')).toBe(true);
    });

    it('should return empty array for non-existent passenger', () => {
      const bookings = bookingRepository.findByPassengerName('Unknown Person');

      expect(bookings).toEqual([]);
    });

    it('should be case sensitive', () => {
      const bookings = bookingRepository.findByPassengerName('agus');

      expect(bookings).toEqual([]);
    });
  });

  describe('findByRoute', () => {
    beforeEach(() => {
      bookingRepository.create(
        new Booking('B001', 'John', 'R001', 'BOOKED', 5)
      );
      bookingRepository.create(
        new Booking('B002', 'Jane', 'R002', 'DEPARTED', 3)
      );
      bookingRepository.create(
        new Booking('B003', 'Bob', 'R001', 'ARRIVED', 7)
      );
    });

    it('should return all bookings for specific route', () => {
      const bookings = bookingRepository.findByRoute('R001');

      expect(bookings).toHaveLength(2);
      expect(bookings.every(b => b.routeId === 'R001')).toBe(true);
    });

    it('should return empty array for non-existent route', () => {
      const bookings = bookingRepository.findByRoute('R999');

      expect(bookings).toEqual([]);
    });
  });

  describe('delete', () => {
    beforeEach(() => {
      bookingRepository.create(
        new Booking('B001', 'John', 'R001', 'BOOKED', 5)
      );
      bookingRepository.create(
        new Booking('B002', 'Jane', 'R002', 'DEPARTED', 3)
      );
    });

    it('should delete existing booking and return true', () => {
      const result = bookingRepository.delete('B001');

      expect(result).toBe(true);
      expect(bookingRepository.findById('B001')).toBeUndefined();
      expect(bookingRepository.findAll()).toHaveLength(1);
    });

    it('should return false when trying to delete non-existent booking', () => {
      const result = bookingRepository.delete('B999');

      expect(result).toBe(false);
      expect(bookingRepository.findAll()).toHaveLength(2);
    });

    it('should not affect other bookings when deleting', () => {
      bookingRepository.delete('B001');

      const remainingBooking = bookingRepository.findById('B002');
      expect(remainingBooking).toBeDefined();
      expect(remainingBooking?.passengerName).toBe('Jane');
    });
  });
});
