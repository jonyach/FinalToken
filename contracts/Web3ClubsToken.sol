// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// imports
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract web3ClubsToken is Ownable {
      using SafeMath for uint256;

    // global Var
    string public tokenName = "web3ClubsToken";
    string public symbol = "WCT";
    uint public decimals = 18; // 0.000000000000000009 // 9000000000000000000
    uint public decimalFactor = 10 ** uint256(decimals);  // 10^18 10^2 0.00
    uint public totalSupply = 1000000 * decimalFactor; // 0.00000000001
    // uint public balanceOf; // balance of address

    event Transfer(address indexed _from, address indexed _to, uint256 _amount);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    

    // mapping 
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor() {
      balanceOf[msg.sender] = totalSupply;
    }


    // todo add safemath method for subtractions and addition
    function transfer(address _to, uint256 _value ) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint _value) public returns (bool success) {
      allowance[msg.sender][_spender] = _value;
      emit Approval(msg.sender, _spender, _value);
      return success;
    }

    // todo add safemath for  sub and addition 
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
  
    }
    
    // do your own implementation
    function mintToken() public view  onlyOwner {

    }




    
}






