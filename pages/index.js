//We recommend the "entrypoint" pages and API's to be as thin as possible,
//and other logic would just be imported from /lib.
//This wil have the benefit of being detected by the watch in yarn dev.
//Changes in these entrypoint pages and API would require a restart on the yarn dev server.
//Changes on the imported libs do not require a restart.
//This makes the development experience more pleasant and seamless.

import FortuneCookie from '@/plugins/fortune-cookie/lib/FortuneCookie';
import { getSessionCache } from "@klaudsol/commons/lib/Session";
import CacheContext from "@/components/contexts/CacheContext";

export default function Index({cache}) {

  return (
    <CacheContext.Provider value={cache}>
      <FortuneCookie />
    </CacheContext.Provider>
  );

}

export const getServerSideProps = getSessionCache();
