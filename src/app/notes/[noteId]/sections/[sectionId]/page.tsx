"use client";

function getRandomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function SectionDetail({
  params,
}: {
  params: {
    noteId: string;
    sectionId: string;
  };
}) {
  const item = getRandomItem(["", "ikan"]);
  if (item === "") {
    throw new Error("Item is empty");
  }

  return (
    <h4>
      Note {params.noteId} section {params.sectionId}
    </h4>
  );
}
