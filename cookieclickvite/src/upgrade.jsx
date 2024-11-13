import { useState, useEffect } from "react";

export default function upgrade({ cookies, setCookies, upgradeName, upgradeImage, cost, setCost, cps, setCps, worth}) {
    const [amount, setAmount] = useState(0)
    const [canPay, setCanPay] = useState(false)

    useEffect(() =>{
        cookies => cost ? setCanPay(true): setCanPay(false)
    }, [cookies])

    function buyUpgrade() {
        if (cookies => cost) {
            setAmount((amount) => amount + 1)
            setCookies((cookies) => cookies - cost)
            setCost((cost) => cost * 2)
            setCps((cps) => cps + worth)
        }
        else {
            alert('Sorry, youre broke. Get your money up')
        }
    }

    return (
        <div onClick={buyUpgrade} className={canPay ? 'upgrade' : 'upgrade unavailable'}>
            <><img 
                src="src/assets/cookiereact.png" alt="upgradevisuals" width={100} length={50} />
                <div className="titleandcost">
                <p className="upgradetitle" >{upgradeName} </p>
                <p className="upgradecost">{cost} cookies </p>
                <button>
                
                  Cookie{(cookie) => {
                  
                  }}
                </button>
                 
               
            </div><span>{amount}</span></>
        </div>
    )
}
 