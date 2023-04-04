//Importing createAPIHandler causes build issues related to
//multer, and ultimately fs. 
//TODO: Find a way to fix this.

//import { createAPIHandler } from '@klaudsol/commons/lib/API';
import { OK } from "@klaudsol/commons/lib/HttpStatuses";

const FORTUNE_URL = "http://yerkee.com/api/fortune/wisdom";

const fortuneHandler = async (req, res) => {

    const fortuneRaw = await fetch(FORTUNE_URL);
    const fortune = await fortuneRaw.json();
    res.status(OK).json(fortune);

  }

export {fortuneHandler};