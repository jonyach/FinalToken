const Web3 = require('web3');

const web3 = new Web3('HTTP://127.0.0.1:7545');

console.log(web3);

//import the abi
const contractAbi = require('./build/contracts/web3ClubsToken.json')
const contractAddress = '0x435be9A8C51246292329e1F05aA6D6b7cf5c8acD'


// get blockchain ID
const networkId = async( _account ) => {
    const netId = await web3.eth.net.getId();
    console.log(netId)
    return netId
}
// networkId()
//get accounts

const getWallet = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts)
}   

// getWallet()

//get balance
const getBalance = async() => {
    const accounts = await web3.eth.getAccounts()
    const balance = await web3.eth.getBalance(accounts[0])

    //cnvert from wei to ether
    const etherBalance = web3.utils.fromWei(balance, 'ether')

    console.log(etherBalance)
}

getBalance()
// treansfer ether from one account to another
const transferEther = async(recepient, sender, amount) => {
    // const account = await web3.eth.getAccounts()
    const balance = await web3.eth.getBalance(sender)
    const etherBalance = web3.utils.fromWei(balance, 'ether')
    console.log(etherBalance)

    //transfer ether
    const tx = await web3.eth.sendTransaction({
        from: sender,
        to: recepient,
        value: web3.utils.toWei(amount, 'ether')
    })

    console.log(tx)
}

trandferEther("0x384ab6aB79bF440B110DFcf99F02Ce5f47cd2411","0x435be9A8C51246292329e1F05aA6D6b7cf5c8acD", 2)
