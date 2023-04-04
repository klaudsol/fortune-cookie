import { createAPIHandler } from '@klaudsol/commons/lib/API';
import { OK } from "@klaudsol/commons/lib/HttpStatuses";

const FORTUNE_URL = "http://yerkee.com/api/fortune/wisdom";

const fortuneHandler = createAPIHandler({
  get: async (req, res) => {

    const fortuneRaw = await fetch(FORTUNE_URL);
    const fortune = await fortuneRaw.json();
    res.status(OK).json(fortune);

  }
}); 
export {fortuneHandler};