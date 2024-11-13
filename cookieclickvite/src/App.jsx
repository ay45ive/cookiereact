import { useEffect, useState } from "react";
import  Cookie  from './cookie';
import  Upgrade  from './upgrade';


export default function App() {
  const [cookies, setCookies] = useState(0);
  const [ FirstCost, setFirstCost ] = useState(10);
  const [ SecondCost, setSecondCost ] = useState(20);
  const [ cps, setCps ] = useState(1);



  useEffect(() => {
    const interval = setInterval(() => {
     setCookies((cookies) => cookies + cps);
    }, 1000);

   return () => clearInterval(interval);
 }, [cps]);

 return (
  <div id="Container">
    <Cookie cookies={cookies} setCookies={setCookies} cps={setCps} />
    
    <div id="Upgrade-container">
      <Upgrade cookies={cookies} setCookies={setCookies} upgradeName="cookie" upgradeImage="src/assets/cookie.png" cost={FirstCost} setCost={setFirstCost} cps={cps} setCps={setCps} worth={1}/>
      <Upgrade cookies={cookies} setCookies={setCookies} upgradeName="grandma" upgradeImage="src/assets/grandma.png" cost={SecondCost} setCost={setSecondCost} cps={cps} setCps={setCps} worth={2}/>
    </div>
  </div>
 )
}
