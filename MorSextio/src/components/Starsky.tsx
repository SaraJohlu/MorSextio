import "./../App.css";

function starskyBoxShadow(count: number, color: string) {
  const star: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    star.push(`${x}px ${y}px ${color}`);
  }
  return star.join(", ");
}

export const Stars: React.FC = () => {
  const small = starskyBoxShadow(700, "gold");
  const medium = starskyBoxShadow(200, "gold");
  const large = starskyBoxShadow(100, "gold");

  return (
    <main className="startsky">
      {/*Star 1 div*/}
      <div
        id="star1"
        style={{
          width: 1,
          height: 1,
          boxShadow: small,
          animation: "starAnimation 50s linear infinite",
          borderRadius: 5,
        }}
      ></div>
      {/*Star 2 div*/}
      <div
        id="star2"
        style={{
          width: 2,
          height: 2,
          boxShadow: medium,
          animation: "starAnimation 100s linear infinite",
          borderRadius: 5,
        }}
      ></div>
      {/*Star 3 div*/}
      <div
        id="star3"
        style={{
          width: 3,
          height: 3,
          boxShadow: large,
          animation: "starAnimation 150s linear infinite",
          borderRadius: 5,
        }}
      ></div>
      <div
        style={{
          width: 1,
          height: 1,
          boxShadow: small,
          position: "absolute",
          top: 2000,
        }}
      />
    </main>
  );
};
