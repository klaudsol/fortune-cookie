//We recommend the "entrypoint" pages and API's to be as thin as possible,
//and other logic would just be imported from /lib.
//This wil have the benefit of being detected by the watch in yarn dev.
//Changes in these entrypoint pages and API would require a restart on the yarn dev server.
//Changes on the imported libs do not require a restart.
//This makes the development experience more pleasant and seamless.

import { fortuneHandler } from '@/plugins/fortune-cookie/lib/FortuneAPI';

export default fortuneHandler;