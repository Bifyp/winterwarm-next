import Content from "@/content/oswietlenie";
import Frame from "@/components/frame";
import { metadataFor } from "@/lib/site";
export const metadata = metadataFor("oswietlenie");
export default function Page() {
  return (
    <Frame slug="oswietlenie">
      <Content />
    </Frame>
  );
}
