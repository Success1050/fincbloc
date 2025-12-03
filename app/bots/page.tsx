import FincBlocAIBots from "@/component/TradingBotComp/BlocAIBots";
import FincBlocTradingBots from "@/component/TradingBotComp/Bot";
import FincBlocCreateBot from "@/component/TradingBotComp/CreateBot";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trading Bot | Fincbloc - A Smarter Way To Automate Trades",
  description:
    "Convert cryptocurrencies instantly with zero fees. Real-time swap with multi-asset support.",
  keywords: ["crypto", "converter", "cryptocurrency", "bitcoin", "ethereum"],
};

const BotTrading = () => {
  return (
    <div>
      <FincBlocTradingBots />
      <FincBlocCreateBot />
      <FincBlocAIBots />
    </div>
  );
};

export default BotTrading;
