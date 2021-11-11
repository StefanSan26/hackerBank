import React from "react";
import { useState} from "react";
// import AppContext from "../context/AppContex";

function TransactionTable({txns}) {
	const [state, setstate] = useState("AAAA-MM-DD")
	const [sorted, setsorted] = useState(txns)
	// const {state,setstate} = React.useContext(AppContext)	
  const datesAllign = (event) => {
		setstate(event.target.value)
	};
	const sort = ()=>{
		let arg = [...sorted]
		setsorted(arg.sort((a,b)=>a.amount-b.amount))		

	}
	const handleClick =()=>{
		setsorted(txns.filter(tn=>tn.date===state))
	}


  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input id="date" type="date" defaultValue={state} onChange={datesAllign} />
        <button className="small" onClick={handleClick}>Filter</button>
      </section>

      <div className="card mt-50">
          <table className="table" >
              <thead>
              <tr className="table">
                  <th className="table-header">Date</th>
                  <th className="table-header">Description</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">
                      <span id="amount" onClick={sort}>Amount ($)</span>
                  </th>
                  <th className="table-header">Available Balance</th>
              </tr>
              </thead>
              <tbody>
							{sorted && sorted.map(tx=>(
              <tr key={tx.amount}>
                  <td>{tx.date}</td>
                  <td>{tx.description}</td>
                  <td>{tx.type === 1 ? "Debit" : "Credit"}</td>
                  <td>{tx.amount}</td>
                  <td>{tx.balance}</td>
              </tr>
						)	)}	
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default TransactionTable;
