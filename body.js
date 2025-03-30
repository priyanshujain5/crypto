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
    function aSorter(){
        console.log('sorter called a')
        const sortdata= [...data].sort((a,b)=> a.current_price - b.current_price);
        setdata(sortdata);
    }
     function dSorter(){
        console.log('sorter called d')
        const sortdata= [...data].sort((a,b)=> b.current_price - a.current_price);
        setdata(sortdata);
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
             <button onClick={aSorter}>Low to High</button>
            <button onClick={dSorter}>High to Low</button>
            </div>
        <div className="cbody">
            {
                data.map((value,index)=>{

                    return (
                        <>
                        <div className="content">

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
