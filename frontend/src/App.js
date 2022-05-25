import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Testapp from "./components/Testapp";
import Connect from "./components/connect/Connect";
import detectEthereumProvider from "@metamask/detect-provider";

function App() {
  const [account, setAccount] = useState(false);

  useEffect(() => {
    isConnected();
  }, []);

  const isConnected = async () => {
    const provider = await detectEthereumProvider();
    const accounts = await provider.request({ method: "eth_accounts" });

    if (accounts.length > 0) {
      setAccount(accounts[0]);
    } else {
      console.log("No authorized account found");
    }
  };

  const connect = async () => {
    try {
      const provider = await detectEthereumProvider();

      // returns an array of accounts
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });

      // check if array at least one element. if so, set account to the first one.

      if (accounts.length > 0) {
        setAccount(accounts[0]);
        //isConnected();
      } else {
        alert("No account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Testapp account={account} />} />
          <Route
            path="/connect"
            element={<Connect account={account} connect={connect} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
