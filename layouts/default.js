import Header from "@/components/header";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-gray-100">{children}</main>
    </>
  );
}
