import { ICurrentDayRepository, ICurrentDayService } from "../interfaces";

export class CurrentDayService implements ICurrentDayService {
    private currentDayRepository: ICurrentDayRepository;

    constructor(currentDayRepository: ICurrentDayRepository) {
        this.currentDayRepository = currentDayRepository;
    }

    getCurrentDay(): number {
        return this.currentDayRepository.getCurrentDay();
    }

    setCurrentDay(day: number): number {
        return this.currentDayRepository.setCurrentDay(day);
    }

    advanceToNextDay(): number {
        // Logic that we need to do when we advance to next day

        return this.currentDayRepository.advanceToNextDay();
    }
}
