import Content from "@/content/bramy-doki";
import Frame from "@/components/frame";
import { metadataFor } from "@/lib/site";
export const metadata = metadataFor("bramy-doki");
export default function Page() {
  return (
    <Frame slug="bramy-doki">
      <Content />
    </Frame>
  );
}
