// // import Image from "next/image";

// // import Header from "@/components/Header";
// import Herosection from "@/components/Herosection";
// import Services from "./services/page";
// import AboutDoctor from "./about/page";
// // import Navbar from "@/components/Navbar";
// // import Navbar from "@/components/Navbar";

// export default function Home() {
//   return (
//     <>
//     {/* <Navbar></Navbar> */}
//    {/* <Header></Header> */}
//    <Herosection></Herosection>
//    <Services></Services>
//    <AboutDoctor></AboutDoctor>
//     </>
//   );
// }


import Head from "next/head";
import Herosection from "@/components/Herosection";
import Services from "@/components/Services";
import AboutDoctor from "@/components/AboutDoctor";

export default function Home() {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Best Doctor in Babubarahi, Madhubani | Quality Healthcare Services</title>
        <meta name="description" content="Looking for the best doctor in Babubarahi? We provide expert medical services with top healthcare professionals." />
        <meta name="keywords" content="best doctor, healthcare services, medical treatment, specialist doctor" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph (for Facebook & LinkedIn) */}
        <meta property="og:title" content="Best Doctor in Babubarahi | Quality Healthcare Services" />
        <meta property="og:description" content="We provide expert medical services with top healthcare professionals. Book an appointment today!" />
        <meta property="og:image" content="/images/doctor-clinic.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card (for Twitter SEO) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Doctor in Babubarahi | Quality Healthcare Services" />
        <meta name="twitter:description" content="We provide expert medical services with top healthcare professionals." />
        <meta name="twitter:image" content="/images/doctor-clinic.jpg" />

        {/* ✅ Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Narayan Dental Clinic Babubarahi",
              "url": "https://drrahul.in.com",
              "image": "https://yourwebsite.com/images/doctor-clinic.jpg",
              "description": "We provide expert medical services with top healthcare professionals.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Petrol Pump, Babubarahi",
                "addressLocality": "Babubarahi",
                "postalCode": "847224",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+918434672022",
                "contactType": "customer service"
              }
            })
          }}
        />
      </Head>

      {/* ✅ Page Components */}
      <Herosection />
      <Services />
      <AboutDoctor />
    </>
  );
}
