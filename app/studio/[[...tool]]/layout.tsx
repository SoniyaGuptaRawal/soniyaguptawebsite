import { metadata as studioMetadata, viewport as studioViewport } from "next-sanity/studio";

export const metadata = {
  ...studioMetadata,
  title: "Studio | Soniya Gupta-Rawal",
};

export const viewport = {
  ...studioViewport,
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="sanity"
      style={{
        height: "100vh",
        maxHeight: "100dvh",
        overscrollBehavior: "none",
        WebkitFontSmoothing: "antialiased",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}
