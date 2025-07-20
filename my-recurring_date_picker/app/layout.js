import "./globals.css"; 
import ProviderWrapper from "../components/ProviderWrapper";

export const metadata = {
  title: "Recurring Date Picker",
  description: "A reusable recurring date picker component",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-green-100 text-xl text-blue-500">
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
