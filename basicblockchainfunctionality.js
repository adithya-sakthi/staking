


$(document).ready(function() {
    const Web3Modal = window.Web3Modal.default;
    const WalletConnectProvider = window.WalletConnectProvider.default;
    const Fortmatic = window.Fortmatic;
    const evmChains = window.evmChains;
    let web3Modal
    let provider;
    let selectedAccount;

     const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
             options: {
                    rpc: {
                        97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
                    },
                    chainId: 97
                }
        },            
      };
          web3Modal = new Web3Modal({
	        cacheProvider: true, // optional
	        providerOptions, // required
	        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
	    });

    var Eabi = [{"inputs":[{"internalType":"uint256","name":"startTime_","type":"uint256"},{"internalType":"uint256","name":"endTime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_party","type":"string"},{"internalType":"string","name":"_flag","type":"string"}],"name":"addCandidates","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"addID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_aadhar","type":"uint256"},{"internalType":"uint8","name":"age","type":"uint8"}],"name":"addVoters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"candidatesCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"voterAadharNumber","type":"uint256"}],"name":"didCurrentVoterVoted","outputs":[{"internalType":"bool","name":"userVoted_","type":"bool"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"partyShortcut","type":"string"},{"internalType":"string","name":"partyFlag","type":"string"},{"internalType":"uint256","name":"nominationNumber","type":"uint256"}],"internalType":"struct EVoting.Candidate","name":"candidate_","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_party","type":"string"},{"internalType":"string","name":"_flag","type":"string"},{"internalType":"uint256","name":"_nominateid","type":"uint256"}],"name":"editCandidates","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_aadhar","type":"uint256"},{"internalType":"uint8","name":"age","type":"uint8"}],"name":"editVoters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"endTime_","type":"uint256"},{"internalType":"uint256","name":"currentTime_","type":"uint256"}],"name":"extendVotingTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCandidateList","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"partyShortcut","type":"string"},{"internalType":"string","name":"partyFlag","type":"string"},{"internalType":"uint256","name":"nominationNumber","type":"uint256"}],"internalType":"struct EVoting.Candidate[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"currentTime_","type":"uint256"}],"name":"getResults","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"partyShortcut","type":"string"},{"internalType":"string","name":"partyFlag","type":"string"},{"internalType":"uint256","name":"voteCount","type":"uint256"},{"internalType":"uint256","name":"nominationNumber","type":"uint256"}],"internalType":"struct EVoting.Results[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVoterList","outputs":[{"components":[{"internalType":"uint256","name":"aadharNumber","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint8","name":"age","type":"uint8"},{"internalType":"bool","name":"isAlive","type":"bool"},{"internalType":"uint256","name":"votedTo","type":"uint256"}],"internalType":"struct EVoting.Voter[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVotingEndTime","outputs":[{"internalType":"uint256","name":"endTime_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"voterAadharNumber","type":"uint256"}],"name":"getuser","outputs":[{"internalType":"bool","name":"isuser","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"voterAadharNumber","type":"uint256"}],"name":"isVoterEligible","outputs":[{"internalType":"bool","name":"voterEligible_","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"joinedAadhar","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"joinedvoterAadhar","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startTime_","type":"uint256"},{"internalType":"uint256","name":"currentTime_","type":"uint256"}],"name":"updateVotingStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"nominationNumber","type":"uint256"},{"internalType":"uint256","name":"voterAadharNumber","type":"uint256"},{"internalType":"uint256","name":"currentTime_","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    var Econtract = "0x355C6092c6D9533240a0E336C4CcD87133493fAa"; 
	connect();


    async function connect(){
        try {
            provider = await web3Modal.connect();
            fetchAccountData();
          } catch(e) {
          	console.log(e,"======error")
            toastr.error("Could not get a wallet connection");
            return;
          }
          // Subscribe to accounts change
          provider.on("accountsChanged", (accounts) => {
            fetchAccountData();
          });

          // Subscribe to chainId change
          provider.on("chainChanged", (chainId) => {
            fetchAccountData();
          });

          // Subscribe to networkId change
          provider.on("networkChanged", (networkId) => {
            fetchAccountData();
          });

	}
		  
	 async function fetchAccountData(){
		try{
		const web3 = new Web3(provider);
	    const chainId = await web3.eth.getChainId();
	    const chainData = evmChains.getChain(chainId);
        if(chainData && chainData.chainId && chainData.chainId==97){
              const accounts = await web3.eth.getAccounts();
              selectedAccount = accounts[0];
              const Contract = new web3.eth.Contract(Eabi, Econtract);
              let owner = await Contract.methods.owner().call();
              let lists = await Contract.methods.userlist().call();
                if(owner == selectedAccount){
                	// you can process your work here
				}else{
					// you can process your work here
				}
            }else{
				window.location.href = "/";
            }
        }catch(err){
        	console.log(err,"=====err")
        }
    }

    $(list).click(function(){
    	window.location.href = "/list";
    })


    $(logout).click(async function(){
    	await web3Modal.clearCachedProvider();
		window.location.href = "/";
    })

    $(login).click(function(){
			connect()
	});

	$('#button').on('click',async function() {
      try{
   	  	  let value = $(this).attr('name');
   	  	  const web3 = new Web3(provider);
          const chainId = await web3.eth.getChainId();
          const chainData = evmChains.getChain(chainId);
            if(chainData && chainData.chainId && chainData.chainId==97){
              const accounts = await web3.eth.getAccounts();
              selectedAccount = accounts[0];
              const Contract = new web3.eth.Contract(Eabi, Econtract);
              let date = moment(Date.now()).unix()
              await Contract.methods.update(value,date).send({ from : selectedAccount })
              alert("Successfully Done");
              fetchAccountData();
            }else{
				window.location.href = "/";
            }
        }catch(err){
        	
        }

	});

});