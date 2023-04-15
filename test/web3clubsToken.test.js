const Web3ClubsToken = artifacts.require("Web3ClubsToken");


contract("web3Token", (accounts) => {
  let token;

  beforeEach(async () => {
    token = await Web3ClubsToken.new();
  })

  it("should have a name", async () => {
    const name = await token.tokenName();
    assert.equal(name, "web3ClubsToken");
  })

  it("should set the total supply on deployment", async () => {
    const totalSupply = await token.totalSupply()
    assert.equal(totalSupply, 1000000 * 10 ** 18, "Total supply is incorrect")
  }) 


  it("should tranfer tokens between accounts", async () => {
    const sender = accounts[0]
    const receiver = accounts[1]
    const amount =  1 * 10 ** 18 // 1000 * 10 ** 18 // 0.000001000 // 10000000000000000000000

    await token.transfer(receiver, amount, {from: sender})

    const senderBalance = await token.balanceOf(sender)
    const receiverBalance = await token.balanceOf(receiver)

    assert.equal(senderBalance, 999000 * 10 ** 18, "Sender balance is incorrect")
    assert.equal(receiverBalance, 1000 * 10 ** 18, "Receiver balance is incorrect")
  })



})