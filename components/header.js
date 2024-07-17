import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data } = useSession();

  // Add a check to ensure data is defined
  if (!data) {
    return <div>Loading...</div>;
  }

  const { accessToken } = data;

  return <div>Access Token: {accessToken}</div>;
};

export default Header;
