import Head from "next/head";
import { api } from "~/utils/api";

export default function ProfilePage() {
  const { data, isLoading } = api.profile.getUserByUsernames.useQuery({
    username: "nneven",
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>404</div>;

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <main className="flex h-screen justify-center">
        <div>{data.username}</div>
      </main>
    </>
  );
}
