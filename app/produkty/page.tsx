import Content from "@/content/produkty";
import Frame from "@/components/frame";
import { metadataFor } from "@/lib/site";
export const metadata = metadataFor("produkty");
export default function Page() {
  return (
    <Frame slug="produkty">
      <Content />
    </Frame>
  );
}
