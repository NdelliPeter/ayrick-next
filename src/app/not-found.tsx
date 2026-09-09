import Link from "next/link";

// Root-level fallback for requests the locale middleware couldn't route at all
// (e.g. malformed paths). Real 404s within a locale render
// `[locale]/not-found.tsx` instead, nested inside the normal site chrome.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: "grid",
            minHeight: "100vh",
            placeItems: "center",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1>404</h1>
            <p>Page not found.</p>
            <Link href="/en">Go home</Link>
          </div>
        </div>
      </body>
    </html>
  );
}
