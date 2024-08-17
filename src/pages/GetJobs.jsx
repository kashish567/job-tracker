import React from "react"
import { ArrowUpRight } from "lucide-react"

function CardFour({ jobs }) {
  return (
    <div className="flex text-white flex-wrap">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="w-full p-4 md:w-1/2"
        >
          <div className="flex h-full items-center text-white bg-blue-400 rounded-md border-2 border-blue-600 p-4">
            <div>
              <h1 className="inline-flex items-center  text-lg font-bold">
                {job.jobTitle} at {job.companyName}{" "}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </h1>
              <p className="mt-1 text-md ">
                Status: {job.applicationStatus}
              </p>
              <p className="mt-1 text-sm ">
                Applied on: {new Date(job.applicationDate).toLocaleDateString()}
              </p>
              {job.followUpDate && (
                <p className="mt-1 text-sm ">
                  Follow-up Date:{" "}
                  {new Date(job.followUpDate).toLocaleDateString()}
                </p>
              )}
              <p className="mt-1 text-sm ">{job.notes}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardFour
