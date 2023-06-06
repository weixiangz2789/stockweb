import React, { useEffect, useRef } from "react";
import { useColorMode } from "@chakra-ui/react";

declare global {
  interface Window {
    TradingView: any;
  }
}

let tvScriptLoadingPromise: Promise<Event>;

const TradingViewWidget: React.FC<{ symbol: string }> = ({ symbol }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(createWidget);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [colorMode]);

  function createWidget(): void {
    if (containerRef.current && "TradingView" in window) {
      new window.TradingView.widget({
        autosize: true,
        symbol: `NASDAQ:${symbol}`,
        interval: "D",
        timezone: "Etc/UTC",
        theme: colorMode === "light" ? "light" : "dark",
        style: "2",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: false,
        container_id: containerRef.current.id,
      });
    }
  }

  return (
    <div
      ref={containerRef}
      id="tradingview_e8628"
      className="tradingview-widget-container"
      style={{ width: "250%", height: "825px" }}
    />
  );
};
export default TradingViewWidget;
