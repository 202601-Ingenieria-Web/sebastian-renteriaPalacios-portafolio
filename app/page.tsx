import LateralMenu from "@/app/components/molecules/menu";
import Layout from "@/app/components/organism/layout";
import LateralLayout from "@/app/components/organism/lateralLayout";
export default function Home() {
  return (
    <LateralLayout>
  <aside className="w-[20%] p-6">
    <LateralMenu />
  </aside>

  <main className="w-[75%] p-6 bg-background-secondary">
    Contenido
  </main>

  <aside className="w-[5%] p-6">
    Extra
  </aside>
</LateralLayout>
     
  );
}
