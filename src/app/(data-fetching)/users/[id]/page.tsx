import Link from "next/link";

async function fetchUser(id: string) {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        cache: "no-store",
      }
    );
    return data.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function userDetail({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const user = await fetchUser(params.id);
  return (
    <div key={user.id} className="h-[150px] border-black border-4 p-4">
      <div>name: {user.name}</div>
      <div>email: {user.email}</div>
      <div>company: {user.company.name}</div>
      <Link href={`/users/`}>Go Back to users</Link>
    </div>
  );
}
