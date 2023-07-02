import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import projects from "../data/projects"
import NewProjectDialog from "./projects/NewProjectDialog"
import NewTaskDialog from "./projects/NewTaskDialog"

const Task = (props) => {
    const { task } = props
    const { name, status, type, assignee } = task

    return (
        <div className="flex justify-between">
            <div className="w-3/6">{name}</div>
            <div className="w-1/6 text-center">{status}</div>
            <div className="w-1/6 text-center">{type}</div>
            <div className="w-1/6 text-center">{assignee}</div>
        </div>
    )
}

const Project = (props) => {
    const { project } = props
    const { title, tasks } = project
    return (
        <div>
            <div className="flex justify-between items-center py-4">
                <div className="font-bold text-lg">{title}</div>
                <NewTaskDialog />
            </div>
            {tasks.map(task =>
                <Task key={task.name} task={task} />
            )}
        </div>
    )
}

const Projects = () => {
    return (
        <Card className="my-8 py-4 px-6">
            <CardContent>
                <div className="flex justify-between items-center pb-4">
                    <div className="font-bold text-xl">Projects</div>
                    <NewProjectDialog />
                </div>
                <div className="flex flex-col gap-4">
                    {projects.map(project =>
                        <Project key={project.title} project={project} />
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
export default Projects