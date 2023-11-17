import { Outlet, useParams } from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";

export let loader: LoaderFunction = async ({ params }) => {
  try {
    const { detailId } = params;
    console.log("id", detailId);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${detailId}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Loader error:", error);
    throw new Error("Failed to load data");
  }
};
export default function Detail({ data }) {
  let { detailId } = useParams();
  return (
    <div>
      Detail {detailId}
      {data}
      <Outlet />
    </div>
  );
}
