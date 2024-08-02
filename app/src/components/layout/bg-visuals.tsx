export default function BGVisuals() {
  return (
    <div className="absolute w-full h-full overflow-hidden">
      <div
        className="fixed top-40 "
        style={{
          left: "-30rem",
          height: "90rem",
          width: "90rem",
          opacity: 0.7,
          backgroundImage: "url('/orange-ellipsis.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      />
      <div
        className="fixed top-20"
        style={{
          right: "-40rem",
          height: "80rem",
          width: "80rem",
          opacity: 0.7,
          backgroundImage: "url('/blue-ellipsis.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      />
      <div
        id="bg-image"
        className={"fixed top-0 left-0 w-screen h-screen pointer-events-none"}
        style={{
          opacity: 0.3,
          backgroundImage: "url('/background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
          filter: "blur(10px)",
        }}
      />
    </div>
  );
}
