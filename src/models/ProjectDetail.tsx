import type ProjectImage from "./ProjectImage";
import type SEO from "./SEO";

interface ProjectDetail {
    title:string;
    image: ProjectImage;
    description:string;
    technology:string[];
    githubLink?:string;
    seo:SEO;
}

export default ProjectDetail