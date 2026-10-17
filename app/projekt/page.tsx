import Content from "@/content/projekt";
import Frame from "@/components/frame";
import { metadataFor } from "@/lib/site";
export const metadata = metadataFor("projekt");
export const dynamic = "force-dynamic";
export default function Page() {
  return (
    <Frame slug="projekt">
      <Content />
    </Frame>
  );
}
