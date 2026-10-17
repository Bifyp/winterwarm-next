import Content from "@/content/o-nas";
import Frame from "@/components/frame";
import { metadataFor } from "@/lib/site";
export const metadata = metadataFor("o-nas");
export default function Page() {
  return (
    <Frame slug="o-nas">
      <Content />
    </Frame>
  );
}
