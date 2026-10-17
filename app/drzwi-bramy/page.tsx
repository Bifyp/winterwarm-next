import Content from "@/content/drzwi-bramy";
import Frame from "@/components/frame";
import { metadataFor } from "@/lib/site";
export const metadata = metadataFor("drzwi-bramy");
export default function Page() {
  return (
    <Frame slug="drzwi-bramy">
      <Content />
    </Frame>
  );
}
