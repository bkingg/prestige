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
        backgroundColor: "#4A121B",
        backgroundImage: "linear-gradient(135deg, #4A121B 0%, #6E1F2A 60%, #4A121B 100%)",
        fontFamily: "Spectral",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div style={{ display: "flex", width: 64, height: 78, position: "relative" }}>
          <svg width="64" height="78" viewBox="0 0 100 120">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30 6H62C79.6731 6 94 20.3269 94 38C94 55.6731 79.6731 70 62 70H46V114H30V6ZM46 22V54H62C70.8366 54 78 46.8366 78 38C78 29.1634 70.8366 22 62 22H46Z"
              fill="#F8F6F1"
            />
            <rect x="23" y="94" width="5" height="14" fill="#C6A870" />
            <rect x="30" y="86" width="5" height="22" fill="#C6A870" />
            <rect x="37" y="78" width="5" height="30" fill="#C6A870" />
            <rect x="44" y="70" width="5" height="38" fill="#C6A870" />
          </svg>
        </div>
        <span style={{ fontSize: 30, letterSpacing: 6, color: "#C6A870", fontWeight: 700 }}>PRESTIGE</span>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 48,
          fontSize: 52,
          fontWeight: 700,
          lineHeight: 1.25,
          color: "#F8F6F1",
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
          color: "#C6A870",
        }}
      >
        {isFr
          ? "Cabinet Conseil - Dakar, Sénégal - Depuis 2000"
          : "Consulting Firm - Dakar, Senegal - Since 2000"}
      </div>
    </div>
  );
}
