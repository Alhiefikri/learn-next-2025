export default function SectionDetail({
  params,
}: {
  params: {
    noteId: string;
    sectionId: string;
  };
}) {
  return (
    <h4>
      Note {params.noteId} section {params.sectionId}
    </h4>
  );
}
