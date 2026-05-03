import ContactMe from "@/app/components/atoms/buttons/contactMe";

export default function Home() {
  return (
    <div>
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
    <div className="mt-4">
      <ContactMe />
    </div>
    </div>
  );
}
