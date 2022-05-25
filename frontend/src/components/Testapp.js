import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import abi from "../abis/Escrow.json";

const contractAddress = "0xA3561De6Ebf7954eF118bc438DD348aB75989639";
const contractABI = abi.abi;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(contractAddress, contractABI, provider.getSigner()); 
console.log(contract);

const Testapp = () => {
    //admin rate set
    const [isAdmin, setIsAdmin] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false);
    const [_noImpactContFee, getNoImpactContFee] = useState(false);

    const getData = async () => {
        const owner = contract.owner();
        console.log(owner)
        const _noImpactContFee = await contract.getNoImpactContFee();
        console.log(_noImpactContFee.toString());
    }
    useEffect(() => {
        getData();        
    }, []);

    
    
    return <div id="calendar">
       <div className="wrapper">
      <h1>How About Them Apples</h1>
      <form>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>


    </div>;
}

export default Testapp;