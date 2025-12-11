import classNames from "classnames";
import { useState } from "react";
import { Mint } from "./Mint";
import { Redeem } from "./Redeem";
import "./styles.css";
import { NucleusActivityContent } from "./NucleusActivityContent";
import { Activity } from "@/app/components/icons";
import { useTransactions } from "../hooks/useTransactions";

export enum Tabs {
  Mint,
  Redeem,
  Activity,
}

function MintAndRedeem() {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.Redeem);
  const { transactions, isLoading } = useTransactions();

  return (
    <>
      <div>
        <div className="deposit-container flex flex-col">
          <div className="deposit-card">
            {activeTab === Tabs.Redeem && <Redeem />}
            {activeTab === Tabs.Activity && (
              <NucleusActivityContent
                transactions={transactions}
                isLoading={isLoading}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MintAndRedeem;
