import Content from "@/content/realizacje";
import Frame from "@/components/frame";
import { metadataFor } from "@/lib/site";
export const metadata = metadataFor("realizacje");
export default function Page() {
  return (
    <Frame slug="realizacje">
      <Content />
    </Frame>
  );
}
