import Content from "@/content/xr-plus";
import Frame from "@/components/frame";
import { metadataFor } from "@/lib/site";
export const metadata = metadataFor("xr-plus");
export default function Page() {
  return (
    <Frame slug="xr-plus">
      <Content />
    </Frame>
  );
}
