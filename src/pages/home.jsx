import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import { API_URLS } from "../config/api";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="container py-5">

        <Catalog
          id="projets"
          titre="Nos projets"
          type="projects"
          url={API_URLS.projects}
        />

        <Catalog
          id="formations"
          titre="Nos formations"
          type="courses"
          url={API_URLS.courses}
        />

      </div>
    </>
  );
}