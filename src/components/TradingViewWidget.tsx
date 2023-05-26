import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    TradingView: any; // Replace 'any' with the expected type of window.TradingView
  }
}

let tvScriptLoadingPromise: Promise<Event>;

const TradingViewWidget: React.FC<{ symbol: string }> = ({ symbol }) => {
  const onLoadScriptRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

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

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => {
      onLoadScriptRef.current = null;
    };

    function createWidget(): void {
      if (
        document.getElementById("tradingview_e8628") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: false,
          symbol: `NASDAQ:${symbol}`,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "2",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_e8628",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_e8628" />
    </div>
  );
};
export default TradingViewWidget;