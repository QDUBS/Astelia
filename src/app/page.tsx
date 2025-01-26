import BaseLayout from "@/components/BaseLayout";
import Dashboard from "./(admin)/dashboard/page";

export default function Home() {
  return (
    <BaseLayout>
      <Dashboard />
    </BaseLayout>
  );
}
