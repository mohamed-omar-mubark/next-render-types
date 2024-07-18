import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className="home container flex-center">
      {session ? (
        <h1>Welcome {session.user.name}</h1>
      ) : (
        <h1>Please sign in to continue</h1>
      )}
    </div>
  );
};

export default Home;
