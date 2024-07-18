// components
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const ISRUsers = ({ users }) => {
  return (
    <div className="container p-3 border-round-lg bg-white">
      <span className="block mb-3 text-xl font-semibold text-gray-500">
        ISR Users
      </span>
      <DataTable
        value={users}
        tableStyle={{ minWidth: "50rem" }}
        rowHover
        showGridlines>
        <Column field="name" header="Name"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="phone" header="Phone"></Column>
      </DataTable>
    </div>
  );
};

export default ISRUsers;

// ISR Rendering
// This gets called at build time and at specified revalidation intervals
export async function getStaticProps() {
  // Fetch users from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();

  // Pass users to the page via props
  return {
    props: { users },
    revalidate: 10, // Revalidate at most once every 10 seconds
  };
}
