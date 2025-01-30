import Card from "./card"
import db from "../firebase"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"

export default function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchDocs = async () => {
            const querySnapshot = await getDocs(collection(db, "projects"))
            const docs = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })).sort((a, b) => b.index - a.index);
            setProjects(docs)
        }
        fetchDocs()
    }, [])

    return (
        
        projects.length > 0 ? (
            projects.map((project) => (
                <Card name={project.name} description={project.description} keywords={project.keywords}></Card>
            ))
        ) : (
            <p>Loading..</p>
        )   
    )
}