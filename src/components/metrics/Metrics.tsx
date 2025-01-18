"use client";

import { useEffect, useState } from "react";

// Tipagem para os dados das métricas
interface MetricsData {
  price: number | null;
  volume_24h: number | null;
  percent_change_24h: number | null;
}

const Metrics = () => {
  const [metrics, setMetrics] = useState<Record<string, MetricsData>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar os dados do backend
  const fetchMetricsData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/metrics");
      if (!response.ok) {
        throw new Error("Erro ao buscar métricas.");
      }
      const data = await response.json();
      setMetrics(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetricsData();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Métricas de Criptomoedas
      </h2>
      {error && (
        <p style={{ color: "red", textAlign: "center" }}>
          {`Erro: ${error}`}
        </p>
      )}
      {loading ? (
        <p style={{ textAlign: "center" }}>Carregando métricas...</p>
      ) : (
        Object.entries(metrics).map(([symbol, data]) => (
          <div
            key={symbol}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3>{symbol}</h3>
            <p>
              <strong>Preço Atual:</strong>{" "}
              {data.price !== null ? `$${data.price.toFixed(2)}` : "Indisponível"}
            </p>
            <p>
              <strong>Volume de Transações (24h):</strong>{" "}
              {data.volume_24h !== null
                ? `$${data.volume_24h.toFixed(2)}`
                : "Indisponível"}
            </p>
            <p>
              <strong>Variação Percentual (24h):</strong>{" "}
              {data.percent_change_24h !== null
                ? `${data.percent_change_24h.toFixed(2)}%`
                : "Indisponível"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Metrics;
