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
        <svg width="74" height="80" viewBox="0 0 100 108">
          <rect width="100" height="108" fill="#A9637A" />
          <circle cx="50" cy="54" r="45" fill="#F2B65A" />
          <path d="M50.3 22.2C49.8 29 48.6 36.5 46.8 43C45.8 47 44.9 50.4 44 54C42.3 60.6 40.2 67.6 37.8 74.2C36.2 78.6 34.4 83.2 32 86.8C30.6 88.8 28.6 89.3 27 88.6" transform="translate(-5.5 -0.3)" fill="none" stroke="#7A4510" strokeWidth="5" strokeLinecap="round" />
          <path d="M43.2 46C49.5 38.2 59.5 31.2 72 29.6C80 28.8 86.5 32 86.7 38.5C86.9 46 82 55 75.5 62C69.5 68.5 61 72 53 72.2C49.5 72.3 46.8 71.6 44.6 70.8" transform="translate(-5.5 -0.3)" fill="none" stroke="#7A4510" strokeWidth="5" strokeLinecap="round" />
          <path d="M37.3 44.8C40.5 44.2 44 43.6 47.3 43.2" transform="translate(-5.5 -0.3)" fill="none" stroke="#7A4510" strokeWidth="5" strokeLinecap="round" />
          <path d="M50.3 22.2C49.8 29 48.6 36.5 46.8 43C45.8 47 44.9 50.4 44 54C42.3 60.6 40.2 67.6 37.8 74.2C36.2 78.6 34.4 83.2 32 86.8C30.6 88.8 28.6 89.3 27 88.6" transform="translate(-7.2 -2.3)" fill="none" stroke="#FFF3CF" strokeWidth="5" strokeLinecap="round" />
          <path d="M43.2 46C49.5 38.2 59.5 31.2 72 29.6C80 28.8 86.5 32 86.7 38.5C86.9 46 82 55 75.5 62C69.5 68.5 61 72 53 72.2C49.5 72.3 46.8 71.6 44.6 70.8" transform="translate(-7.2 -2.3)" fill="none" stroke="#FFF3CF" strokeWidth="5" strokeLinecap="round" />
          <path d="M37.3 44.8C40.5 44.2 44 43.6 47.3 43.2" transform="translate(-7.2 -2.3)" fill="none" stroke="#FFF3CF" strokeWidth="5" strokeLinecap="round" />
          <path d="M50.3 22.2C49.8 29 48.6 36.5 46.8 43C45.8 47 44.9 50.4 44 54C42.3 60.6 40.2 67.6 37.8 74.2C36.2 78.6 34.4 83.2 32 86.8C30.6 88.8 28.6 89.3 27 88.6" transform="translate(-6.5 -1.5)" fill="none" stroke="#F2B65A" strokeWidth="5" strokeLinecap="round" />
          <path d="M43.2 46C49.5 38.2 59.5 31.2 72 29.6C80 28.8 86.5 32 86.7 38.5C86.9 46 82 55 75.5 62C69.5 68.5 61 72 53 72.2C49.5 72.3 46.8 71.6 44.6 70.8" transform="translate(-6.5 -1.5)" fill="none" stroke="#F2B65A" strokeWidth="5" strokeLinecap="round" />
          <path d="M37.3 44.8C40.5 44.2 44 43.6 47.3 43.2" transform="translate(-6.5 -1.5)" fill="none" stroke="#F2B65A" strokeWidth="5" strokeLinecap="round" />
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
