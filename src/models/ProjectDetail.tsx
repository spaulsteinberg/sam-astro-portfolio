import type ProjectImage from "./ProjectImage";

interface ProjectDetail {
    title:string;
    image: ProjectImage;
    description:string;
    technology:string[];
    githubLink?:string;
}

export default ProjectDetail