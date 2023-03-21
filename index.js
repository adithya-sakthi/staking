import Web3 from 'web3';

const connectButton = document.getElementById("connect-button");
connectButton.addEventListener("click", connectWallet);

function connectWallet() {
  const provider = new Web3(Web3.givenProvider);
  provider.eth.net.getId().then(networkId => {
    if (networkId !== 97) {
      alert("Please connect to the Binance Smart Chain testnet.");
    } else {
      provider.eth.request({ method: "eth_requestAccounts" })
        .then(accounts => {
          console.log("Connected to the wallet.");
          document.getElementById("connect-button").innerText = "Connected";
          document.getElementById("connect-button").removeEventListener("click", connectWallet);
        })
        .catch(error => {
          alert(error);
        });
    }
  });
}

connectButton.addEventListener("click", connectWallet);
