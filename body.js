import React,{useState, useCallback, useEffect, use} from "react";


function CryptoBody(){
    
    const [data,setdata]= useState([]);
    const [value,setvalue]=useState(['bitcoin','solana']);
    console.log("re-render")
    async function fetcher(value){
        const response= await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${value}`)
        const data = await response.json();
        setdata(data);
    }
    if(location.reload){
        useEffect(()=>{
          fetcher(value)
        },[])
    }
    
  useCallback(()=>{

      useEffect(()=>{
         fetcher(value)
      },[])
  },[data])
    

    return (
        <>
           <div className="search">
            <input type="text" id="in" value={value} onChange={(e)=> setvalue(e.target.value)} placeholder="enter any coin and get magic"></input>
            <button onClick={()=>fetcher(value)}>Search</button>
            </div>
        <div className="cbody">
            {
                data.map((value,index)=>{

                    return (
                        <>
                        <div className="content" key={index}>

                        <img src={value.image}></img>
                        <span>Symbol: {value.symbol}</span>
                        <h2>Coin Name: {value.name}</h2>
                        <h1>Current price in USD: {value.current_price}</h1>
                        <div className="price"><span id="high">High: {value.high_24h}$ </span> | <span id="low">Low: {value.low_24h}$ </span> </div>
                        </div>
                        </>
                    )
                })
            }
        </div>

        </>
    )
}

export default CryptoBody;