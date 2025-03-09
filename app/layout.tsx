import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import "../public/style.css"
 
export default function HomeLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

  return (

    <html>
      <body className="font-custom bg-purple-100">
          <Nav/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
