"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2>{error.message}</h2>
      <button className="bg-slate-800 hover:opacity-50" onClick={reset}>
        Try Again
      </button>
    </div>
  );
}
