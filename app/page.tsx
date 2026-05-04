import LateralMenu from "@/app/components/molecules/menu";
import Layout from "@/app/components/organism/layout";
import LateralLayout from "@/app/components/organism/lateralLayout";
import ListSocials from "@/app/components/molecules/listSocials";
import Profile from "@/app/components/molecules/profile";
import CardGrid from "@/app/components/molecules/cardGrid";
export default function Home() {
  return (
    <LateralLayout>
  <aside className="w-[20%] p-4">
    <LateralMenu />
  </aside>

  <main className="w-[77%] p-4 bg-background-secondary">
    <Layout bgColor="bg-background">
      <Profile contenido="Systems Engineering student currently in 9th semester, diving deep into backend development,
database design, and applied AI projects. I have a strong passion for crafting efficient, scalable,
and data-driven solutions. My interests lie in software development and AI-driven systems.
"
 imageUrl="/anonimous-image.png" />
    </Layout>
    <Layout bgColor="bg-background-secondary">
      <CardGrid />
    </Layout>
    <Layout bgColor="bg-background">
      <h1 className="text-black">Hello World!</h1>
    </Layout>
    <Layout bgColor="bg-background-secondary">
      <h1 className="text-black">Hello World!</h1>
    </Layout>
  </main>

  <aside className="w-[2%] p-4">
    <ListSocials />
  </aside>
</LateralLayout>
     
  );
}
