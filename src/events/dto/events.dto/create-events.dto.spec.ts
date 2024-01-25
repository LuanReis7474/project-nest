import { CreateEventsDTO } from './create-events.dto';

describe('EventsDto', () => {
  it('should be defined', () => {
    expect(new CreateEventsDTO()).toBeDefined();
  });
});
