import Content from "@/content/skyline";
import Frame from "@/components/frame";
import { metadataFor } from "@/lib/site";
export const metadata = metadataFor("skyline");
export default function Page() {
  return (
    <Frame slug="skyline">
      <Content />
    </Frame>
  );
}
