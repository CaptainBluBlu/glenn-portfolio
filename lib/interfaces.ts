interface IProjectCard {
    id: number,
    title: string
    description: string
    imgSrc: string
    githubUrl?: string
    blogUrl?: string | null
    liveUrl?: string | null
}


export default IProjectCard