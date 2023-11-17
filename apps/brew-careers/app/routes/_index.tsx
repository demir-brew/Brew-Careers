import { Link } from "@remix-run/react";

export default function Home() {
  return (
    <>
      <div>
        <Link to="/detail/1"> tıkla</Link>
      </div>
      <div>
        <Link to="/detail/2"> tıkla</Link>
      </div>
    </>
  );
}
