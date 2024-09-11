import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-[#09090B] w-full h-screen">
      <div className="w-60 p-5">
        <Button onClick={() => confirm("Are you sure you want to cancel?")}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
