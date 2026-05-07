class MathCelebrityAPI {
  constructor(apiKey, baseURL = "https://api.mathcelebrity.com") {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
  }

  async request(endpoint, data = {}) {
    const response = await fetch(`${this.baseURL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }

  async solve(problem) {
    return this.request("solve", { problem });
  }

  async quiz(options = {}) {
    return this.request("quiz", options);
  }

  async random() {
    return this.request("random");
  }

  async sudoku() {
    return this.request("sudoku");
  }
}

module.exports = MathCelebrityAPI;
