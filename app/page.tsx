import LateralMenu from "@/app/components/molecules/menu";
import Layout from "@/app/components/organism/layout";
import LateralLayout from "@/app/components/organism/lateralLayout";
import ListSocials from "@/app/components/molecules/listSocials";
export default function Home() {
  return (
    <LateralLayout>
  <aside className="w-[20%] p-6">
    <LateralMenu />
  </aside>

  <main className="w-[78%] p-6 bg-background-secondary">
    <Layout>
      <h1 className="text-white">Hello World!</h1>
    </Layout>
    <Layout>
      <h1 className="text-white">Hello World!</h1>
    </Layout>
    <Layout>
      <h1 className="text-white">Hello World!</h1>
    </Layout>
  </main>

  <aside className="w-[2%] p-6">
    <ListSocials />
  </aside>
</LateralLayout>
     
  );
}
