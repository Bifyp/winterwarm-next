import Content from "@/content/hvac";
import Frame from "@/components/frame";
import { metadataFor } from "@/lib/site";
export const metadata = metadataFor("hvac");
export default function Page() {
  return (
    <Frame slug="hvac">
      <Content />
    </Frame>
  );
}
