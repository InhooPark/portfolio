import Layout from "@/src/Layout";
import Project from "@/src/Project";
import Style from "@/styles/project.module.scss";
import Headmeta from "@/src/Headmeta";
import ProjectData from "@/json/project.json";

const Projects = () => {
  return (
    <Layout>
      <Headmeta title="Projects" />
      <main className={Style.project_main}>
        <section className={Style.project_section}>
          {ProjectData.data.map((data, key) => {
            return <Project key={key} data={data} />;
          })}
        </section>
      </main>
    </Layout>
  );
};

export default Projects;
