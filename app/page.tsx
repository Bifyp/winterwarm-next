import Content from "@/content/index";
import Frame from "@/components/frame";
import { metadataFor } from "@/lib/site";
export const metadata = metadataFor("index");
export default function Page() {
  return (
    <Frame slug="index">
      <Content />
    </Frame>
  );
}
