import { Link } from 'react-router-dom';

function Projects(props) {
    const projects = props.projectList.map((p, index) => {
        return(
            <li key={index}>
                <Link to={`/projects/${p.id}`}>{p.name}</Link>
            </li>
        )
    })

    return(
        <div>
            {projects}
        </div>
    )
}

export default Projects;