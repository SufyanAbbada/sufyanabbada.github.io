import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <div className="pb-96 magnify-cursor">Portfolio Started</div>
      <p className="pb-96 bg-slate-800 heart-cursor">Test</p>
      <p className="pb-96 bg-blue-200 leaf-cursor">Last</p>
    </main>
  );
}
