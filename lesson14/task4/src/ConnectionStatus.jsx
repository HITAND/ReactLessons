import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [currentStatus, setStatus] = useState({ status: "online" });

  useEffect(() => {
    const onStatus = (e) => {
      setStatus({ status: e.type });
    };

    window.addEventListener("online", onStatus);
    window.addEventListener("offline", onStatus);

    return () => {
      window.removeEventListener("online", onStatus);
      window.removeEventListener("offline", onStatus);
    };
  }, []);

  const { status } = currentStatus;
  return <div className="status status_offline">{status}</div>;
};

export default ConnectionStatus;
