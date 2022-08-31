import type ProjectImage from "./ProjectImage";

interface Project {
    route:string;
    type:string;
    title:string;
    colorClass:string;
    image:ProjectImage;
}

export default Project