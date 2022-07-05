import { ethers } from "hardhat";
import { expect } from "chai";

describe("Escrow", function () {
    it("Return latest contract instance", async () => {
        const owners = await ethers.getSigners();
        const escrow = await ( await ethers.getContractFactory("Escrow") ).deploy()
    })
})