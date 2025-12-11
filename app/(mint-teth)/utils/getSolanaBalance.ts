import { TOKEN_2022_PROGRAM_ID } from "@solana/spl-token";
import { Connection, PublicKey } from "@solana/web3.js";
import { parseUnits } from "viem";

const eclipseRpcUrl = "https://mainnetbeta-rpc.eclipse.xyz";

export async function getSolanaBalance(
  userAddress: string,
  tokenMint: string
): Promise<bigint> {
  if (!eclipseRpcUrl) {
    throw new Error("Eclipse RPC URL is not defined");
  }

  const connection = new Connection(eclipseRpcUrl, "confirmed");

  const wallet = new PublicKey(userAddress);

  let balance = 0;

  const tokenAccounts = await connection.getParsedTokenAccountsByOwner(wallet, {
    programId: TOKEN_2022_PROGRAM_ID,
  });
  if (tokenAccounts.value.length !== 0) {
    const tethAccounts = tokenAccounts.value.filter((accInfo) => {
      return accInfo.account.data.parsed.info.mint === tokenMint;
    });

    tethAccounts.forEach((accountInfo) => {
      const tokenAmount =
        accountInfo.account.data.parsed.info.tokenAmount.uiAmount;
      balance += tokenAmount;
    });
  }
  return parseUnits(balance.toString(), 18);
}
