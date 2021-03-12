export default class AviasalesDBService {
  constructor() {
    this.API_BASE = 'https://aviasales-test-api.java-mentor.com/';

    this.getSearchId = async () => {
      const response = await fetch(`${this.API_BASE}search`);

      // if (!response.ok) {
      // 	throw new Error(`Ошибка ${response.status}`);
      // }

      const body = await response.json();

      return body;
    };

    this.getTickets = async (searchId) => {
      const response = await fetch(`${this.API_BASE}tickets?searchId=${searchId}`);

      // if (!response.ok) {
      // 	throw new Error(`Ошибка ${response.status}`);
      // }

      const body = await response.json();

      return body;
    };
  }
}
