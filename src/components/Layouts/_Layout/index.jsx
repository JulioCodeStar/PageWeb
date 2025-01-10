import { Footer } from "../Footer";
import Header from "../Header";
import { HeaderBanner } from "../Header/header-banner";


export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBanner />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
