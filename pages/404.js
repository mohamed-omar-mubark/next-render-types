import React from "react";
import Link from "next/link";

// components
import { Button } from "primereact/button";

const NotFound = () => {
  return (
    <div className="container home text-center flex flex-column justify-content-center gap-2">
      <h1 className="m-0 text-4xl font-bold text-gray-700">404</h1>
      <p className="text-xl text-gray-500">Page Not Found</p>

      <Link href="/">
        <Button icon="pi pi-refresh" label="Back To Home" size="small" />
      </Link>
    </div>
  );
};

export default NotFound;
NotFound.getLayout = function pageLayout(page) {
  return <>{page}</>;
};
