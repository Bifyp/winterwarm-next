import Content from "@/content/obiekty";
import Frame from "@/components/frame";
import { metadataFor } from "@/lib/site";
export const metadata = metadataFor("obiekty");
export default function Page() {
  return (
    <Frame slug="obiekty">
      <Content />
    </Frame>
  );
}
