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

  <main className="w-[76%] p-6 bg-background-secondary">
    <Layout bgColor="bg-background">
      <h1 className="text-black">Hello World!</h1>
    </Layout>
    <Layout bgColor="bg-background-secondary">
      <h1 className="text-black">Hello World!</h1>
    </Layout>
    <Layout bgColor="bg-background">
      <h1 className="text-black">Hello World!</h1>
    </Layout>
    <Layout bgColor="bg-background-secondary">
      <h1 className="text-black">Hello World!</h1>
    </Layout>
  </main>

  <aside className="w-[3%] p-6">
    <ListSocials />
  </aside>
</LateralLayout>
     
  );
}
