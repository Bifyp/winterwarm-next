import Content from "@/content/rozwiazania";
import Frame from "@/components/frame";
import { metadataFor } from "@/lib/site";
export const metadata = metadataFor("rozwiazania");
export default function Page() {
  return (
    <Frame slug="rozwiazania">
      <Content />
    </Frame>
  );
}
