import React from "react";
import Button from "../common/Button";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import metamask from "../../assets/images/metamask@3x.png";

export default function Connect({ account, connect }) {
  const handleClick = () => {
    connect();
  };
  return !account ? (
    <div className="h-screen py-8 px-4 bg-whiteGray">
      <p className="text-primary text-xl text-center font-semibold">
        There is no wallet connect to your account.
      </p>
      <div className="bg-white rounded-lg p-5 my-5 space-y-4">
        <Button
          size="md"
          variant="outline"
          className="w-full justify-center font-bold"
          onClick={handleClick}
        >
          Wallet connect
        </Button>

        <div>
          <p>
            All payments in Socious are done with cryptocurrencies. By
            connecting a wallet, you agree to Socious terms & conditions.
          </p>
        </div>
        <div>
          <p>To learn more about payments, visit our FAQ.</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen py-8 px-4 bg-whiteGray space-y-5">
      <div className="bg-white rounded-lg flex items-center justify-between p-3">
        <img src={metamask} alt="Metamask" width={24} height={24} />
        <p className="text-primary text-base font-semibold">
          {`${account?.substring(0, 17)}...${account?.substring(
            account.length - 5
          )}`}
        </p>
        <div className="p-2 rounded-full bg-borderGray">
          <DotsHorizontalIcon className="text-primary w-5 h-5 " />
        </div>
      </div>
      <p className="text-primary text-xl text-center font-semibold">
        You&apos;ve successfuly connected your wallet.
      </p>
    </div>
  );
}
