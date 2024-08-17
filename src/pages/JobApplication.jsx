import React, { useEffect, useState } from "react"
import CardFour from "./GetJobs"

function JobApplications() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:4321/job-application/", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        })
        const result = await response.json()
        if (response.ok) {
          setJobs(result.data)
        } else {
          console.error(result.error || "Failed to fetch jobs")
        }
      } catch (error) {
        console.error("Error fetching job applications:", error)
      }
    }

    fetchJobs()
  }, [])

  return (
    <div className="h-full bg-blue-50 p-4">
      <CardFour jobs={jobs} />
    </div>
  )
}

export default JobApplications
