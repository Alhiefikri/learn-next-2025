"use client";

import Card from "@/app/components/Card";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Card>
      <h2>{error.message}</h2>
      <button onClick={reset}>Try Again</button>
    </Card>
  );
}
