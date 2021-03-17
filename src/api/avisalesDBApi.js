export default class AviasalesDBService {
  constructor() {
    this.API_BASE = 'https://aviasales-test-api.java-mentor.com/';

    this.getSearchId = async () => {
      const response = await fetch(`${this.API_BASE}search`);
      const body = await response.json();

      return body;
    };

    this.getTickets = async (searchId) => {
      try {
        const response = await fetch(`${this.API_BASE}tickets?searchId=${searchId}`);
        const { tickets, stop } = await response.json();

        return [tickets, stop];
      } catch {
        return [[], false];
      }
    };
  }
}
