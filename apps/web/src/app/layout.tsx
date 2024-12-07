import "@repo/ui/styles.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ko">
      <body>
        <div className="max-w-[600px] h-screen mx-auto border-x border-gray-200">
          {children}
        </div>
      </body>
    </html>
  );
}
