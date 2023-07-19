export function ArtPieces({ pieces }) {
  console.log("pieces", pieces);
  return (
    <ul>
      {pieces.map((artPiece) => (
        <li key={artPiece.id}>
          {artPiece.imageSource},{artPiece.name}, {artPiece.artist}
        </li>
      ))}
    </ul>
  );
}
