const MathCelebrityAPI = require("mathcelebrity-sdk");

const api = new MathCelebrityAPI("YOUR_API_KEY");

async function run() {
  const result = await api.solve("2x + 5 = 15");
  console.log(result);
}

run();
