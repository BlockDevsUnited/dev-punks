// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract ERC20 {
    function balanceOf(address who) public virtual view returns (uint256);
    function transfer(address to, uint256 value) public virtual returns (bool);
}

contract DevPunks is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    bool public mintingLocked;
    uint public totalSupply;
    address constant public devcashAddress = 0x0fca8Fdb0FB115A33BAadEc6e7A141FFC1bC7d5a;
    constructor() ERC721("DevPunks", "DP") {}

    mapping(uint => string) tokenURIs;

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
      return tokenURIs[tokenId];
    }

    function mint(address player, string memory mytokenURI) public onlyOwner returns (uint256) {
        require(mintingLocked=false,"Minting Locked Forever");
        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        tokenURIs[newItemId] = mytokenURI;
        _tokenIds.increment();
        totalSupply = _tokenIds.current();
        return newItemId;
    }

    function burn(uint tokenId) public {
        require(msg.sender == ERC721.ownerOf(tokenId),"Owner should only be able to burn");
        uint value = ERC20(devcashAddress).balanceOf(address(this))/totalSupply;
        ERC20(devcashAddress).transfer(msg.sender,value);
        _burn(tokenId);
        totalSupply--;
    }
    
    function checkBalance() public view returns(uint) {
        return ERC20(devcashAddress).balanceOf(address(this));
    }
    
    function lockMinting() public {
        require(msg.sender==owner(),"You are not owner of the contract");
        mintingLocked=true;
    }
}
