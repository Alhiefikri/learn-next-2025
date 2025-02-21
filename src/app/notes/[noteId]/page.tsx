export default function Note({
  params,
}: {
  params: {
    noteId: string;
  };
}) {
  return <h3>Note Detail {params.noteId}</h3>;
}
