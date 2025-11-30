import FincBlocAIBots from "@/component/TradingBotComp/BlocAIBots";
import FincBlocTradingBots from "@/component/TradingBotComp/Bot";
import FincBlocCreateBot from "@/component/TradingBotComp/CreateBot";

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
