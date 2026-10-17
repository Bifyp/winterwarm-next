import Content from "@/content/kontakt";
import Frame from "@/components/frame";
import { metadataFor } from "@/lib/site";
export const metadata = metadataFor("kontakt");
export default function Page() {
  return (
    <Frame slug="kontakt">
      <Content />
    </Frame>
  );
}
