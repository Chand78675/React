import { useState } from "react"

export function EmiCalculater()
{
    const[amount,setAmount]= useState(100000);
    const[years,setYears]= useState(1);
    const[rates,setRates]= useState(10.45);
    const[emi,setEmi]=useState(0);
    const [toggleResult, setToggleResult] = useState('d-none');
    function handleAmountChange(e)
    {
       setAmount(e.target.value);
    }
    function handleYearChanges(e)
    {
        setYears(e.target.value);
    }
    function handleRatesChange(e)
    {
        setRates(e.target.value);
    }
    function handleCalculateClick(){

        var P = parseInt(amount);

        var N = parseInt(years) * 12;

        var R = parseFloat(rates)/12/100;

        var EMI = P * R * (Math.pow(1+R,N)) / (Math.pow(1+R,N)-1);

        setEmi(EMI);

        setToggleResult('d-block');

    }
    return (
        <div className="container-fluid">
           <div>
            <h4 className="text-center">Personal Loan EMI Calculator</h4>
            <div className="row">
               <div className="col">
                Amount you need &#8377;<input onChange={handleAmountChange} type="text"value={amount}size='10'/>
               </div>
               <div className="col">
                for<input onChange={handleYearChanges} type="text" value={years} size='2'/>Years
               </div>
               <div className="col">
                interest rate<input onChange={handleRatesChange} type="text" value={rates} size='4'/>%
               </div>
            </div>
            <div className="row">
               <div className="col">
                  <input onChange={handleAmountChange} type="range" value={amount} className="form-range"
                  step='10000' min='100000' max='1000000'/>
                  <div>
                    <span>&#8377;1,000,00</span>
                    <span className="float-end">10,00,000</span>
                  </div>
               </div>
               <div className="col">
                   <input onChange={handleYearChanges} type="range" value={years} className="form-range"
                   min='1' max='5'/>
                   <div>
                    <span>1 Years</span>
                    <span className="float-end">5 Years</span>
                   </div>
               </div>
               <div className="col">
                   <input onChange={handleRatesChange} type="range" value={rates} className="form-range" step='0.01'
                   min='10.45'max='18.45'/>
                   <div>
                    <span>10.45%</span>
                    <span className="float-end">10.18%</span>
                   </div>
               </div>

            </div>
            <div className="row mt-5">
                <div className="col text-end">
                    <button onClick={handleCalculateClick} className="btn btn-primary">Calculate</button>
                </div>
            </div>
               <div className={`row mt-5 ${toggleResult}`}>

                    <div className="col">

                         <div className="text-center fs-4">

                            Your EMI amount is <span className="fw-bold">{emi.toLocaleString('en-in', {style:'currency', currency:'INR', minimumFractionDigits:2, maximumFractionDigits:2})}</span> for next {years * 12} months.

                         </div>

                    </div>

                </div>
           </div>
        </div>
    )
}