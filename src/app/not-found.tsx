import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          background: "var(--color-cream, #faf8f5)",
          color: "var(--color-deep, #1a1a1a)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1 style={{ fontFamily: "var(--font-display, serif)", fontSize: "3rem", margin: 0 }}>404</h1>
        <p style={{ fontSize: "1.1rem", margin: 0 }}>Page not found</p>
        <Link
          href="/en"
          style={{ color: "var(--color-teal, #0d9488)", textDecoration: "none", fontWeight: 600 }}
        >
          Return home
        </Link>
      </body>
    </html>
  );
}
