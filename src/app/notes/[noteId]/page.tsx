import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    noteId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Note Details ${params.noteId}`,
  };
};

export default function Note({ params }: Props) {
  if (parseInt(params.noteId) > 100) {
    notFound();
  }
  return <h3>Note Detail {params.noteId}</h3>;
}
