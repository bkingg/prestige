export function brandImageContent(isFr: boolean) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#FFFFFF",
        backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 55%, #FFF2CC 100%)",
        borderBottom: "14px solid #002060",
        fontFamily: "Spectral",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <svg width="80" height="80" viewBox="0 0 100 100">
          <rect width="100" height="100" rx="6" fill="#A65A70" />
          <circle cx="50" cy="51" r="41" fill="#E6A541" />
          <path d="M37 33C40 28.5 43.5 27 46 27.5C45.2 43 43.4 61 41.2 75.5C40.6 80 37.6 82.6 33.8 80.8" fill="none" stroke="#2B1A14" strokeWidth="3.4" strokeLinecap="round" />
          <path d="M45.6 30.5C53 22.5 70 21.5 72.6 33.5C75 45.5 61 55 46.4 50.5" fill="none" stroke="#2B1A14" strokeWidth="3.4" strokeLinecap="round" />
          <path d="M34.5 44L49 41.6" fill="none" stroke="#2B1A14" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: 34, color: "#8B1E52", fontWeight: 700 }}>PRESTIGE</span>
        <span style={{ fontSize: 30, color: "#8B1E52" }}>» Cabinet Conseil</span>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 48,
          fontSize: 52,
          fontWeight: 700,
          lineHeight: 1.25,
          color: "#002060",
          maxWidth: 920,
        }}
      >
        {isFr
          ? "Transformer les enjeux complexes en décisions qui créent de l'impact."
          : "Turning complex challenges into decisions that create impact."}
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 48,
          fontSize: 24,
          fontWeight: 400,
          letterSpacing: 2,
          color: "#8B1E52",
        }}
      >
        {isFr
          ? "Cabinet Conseil - Dakar, Sénégal - Depuis 2000"
          : "Consulting Firm - Dakar, Senegal - Since 2000"}
      </div>
    </div>
  );
}
