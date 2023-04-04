import InnerSingleLayout from "@/components/layouts/InnerSingleLayout";
import { slsFetch } from "@klaudsol/commons/lib/Client";
import { useState } from 'react';


export default function FortuneCookie({cache}) {

  const generateFortune = () => {
    (async () => {
      const fortuneRaw = await slsFetch('/api/plugins/fortune-cookie');
      const fortune = await fortuneRaw.json();
      setFortune(fortune.fortune);
    })();
  };

  const [fortune, setFortune] = useState();

  return (
      <InnerSingleLayout>
        <div>
          <div className="row">
            <div className="col-12">
              <div className="row mt-5">
                <div className="col-12 col-md-10">
                  <h3>Fortune Cookie</h3>
                  <p>Click to know your fortune today!</p>

                  <p>This is an example of a KlaudSol CMS plugin. You can go and check out <a target="_blank" href="https://github.com/klaudsol/fortune-cookie">our Github repository</a> to create your own custom plugin.</p>

                  <div style={{textAlign: "center"}}>
                    <img width='400' src='https://assets.klaudsol.com/psychedelic-fortune-cookie.png' />
                    <div>
                    {!fortune && (
                     <h3 className='p-3'>What is my fortune for today?</h3>
                    )}
                    {fortune && (
                     <h3 className='p-3'>{fortune}</h3>
                    )}

                     <button 
                      type="button" 
                      class="btn_general_lg general-button-save m-3" 
                      onClick={generateFortune}
                      style={{width: '250px', padding: '2px', display: 'inline'}}>
                        Generate Fortune
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div> 
          </div>
        </div>
      </InnerSingleLayout>
  );

}