import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form"

function AddJob() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm()

  const { toast } = useToast()

  const onSubmit = async (data) => {
    const formdata = {
      companyName: data.company,
      jobTitle: data.job_title,
      applicationStatus: data.application_status,
      followUpDate: data.follow_up_date,
      applicationDate: data.application_date,
      notes: data.notes,
    }

    try {
      console.log(formdata)
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_HOST}/job-application`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("authToken"),
          },
          body: JSON.stringify(formdata),
        }
      )
      const result = await response.json()
      if (response.ok) {
        toast({
          title: "Success",
          description: "Job added successfully",
          type: "success",
        })
      } else {
        toast({
          title: "Error",
          description: result.message || "There was some error occurred",
          type: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was some error occurred",
        type: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-blue-50 p-10">
      <Card className="mx-auto max-w-6xl rounded-lg bg-white p-10 text-blue-600 shadow-lg">
        <CardHeader className="mb-10 text-center text-4xl font-bold text-blue-600">
          Add Job
        </CardHeader>
        <CardDescription className="mb-10 text-center text-blue-600">
          Add a job to your profile
        </CardDescription>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            <div>
              <Label>Company Name</Label>
              <Input
                type="text"
                className={`${errors.company ? "border-red-500" : ""}`}
                placeholder="Company Name"
                {...register("company", {
                  required: "Company name is required",
                })}
              />
              {errors.company && (
                <p className="text-red-500">{errors.company.message}</p>
              )}
            </div>

            <div>
              <Label>Job Title</Label>
              <Input
                className={`${errors.job_title ? "border-red-500" : ""}`}
                type="text"
                placeholder="Job Title"
                {...register("job_title", {
                  required: "Job title is required",
                })}
              />
              {errors.job_title && (
                <p className="text-red-500">{errors.job_title.message}</p>
              )}
            </div>

            <div className="col-span-1 md:col-span-2">
              <Label>Application Status</Label>
              <Controller
                name="application_status"
                control={control}
                rules={{ required: "Application Status is required" }}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    className={`flex flex-wrap gap-5 ${errors.application_status ? "border-red-500" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem
                        value="Applied"
                        id="applied"
                      />
                      <Label htmlFor="applied">Applied</Label>
                    </div>
                    <div className="flex items-center gap-4">
                      <RadioGroupItem
                        value="Interviewing"
                        id="interviewing"
                      />
                      <Label htmlFor="interviewing">Interviewing</Label>
                    </div>
                    <div className="flex items-center gap-4">
                      <RadioGroupItem
                        value="Offer"
                        id="offer"
                      />
                      <Label htmlFor="offer">Offered</Label>
                    </div>
                    <div className="flex items-center gap-4">
                      <RadioGroupItem
                        value="Rejected"
                        id="rejected"
                      />
                      <Label htmlFor="rejected">Rejected</Label>
                    </div>
                  </RadioGroup>
                )}
              />
              {errors.application_status && (
                <p className="text-red-500">
                  {errors.application_status.message}
                </p>
              )}
            </div>

            <div>
              <Label>Application Date</Label>
              <input
                {...register("application_date", {
                  required: "Please select a date",
                })}
                type="date"
                className={`w-full rounded-lg border bg-white px-4 py-2
                  ${errors.application_date ? "border-red-500" : ""}`}
              />
              {errors.application_date && (
                <p className="text-red-500">
                  {errors.application_date.message}
                </p>
              )}
            </div>

            <div>
              <Label>Follow Up Date</Label>
              <input
                {...register("follow_up_date")}
                type="date"
                className={`w-full rounded-lg border bg-white px-4 py-2
                  ${errors.follow_up_date ? "border-red-500" : ""}`}
              />
              {errors.follow_up_date && (
                <p className="text-red-500">{errors.follow_up_date.message}</p>
              )}
            </div>

            <div className="col-span-1 md:col-span-2">
              <Label>Notes</Label>
              <textarea
                {...register("notes")}
                className={`h-[10rem] w-full rounded-lg border bg-white px-4 py-2
                  ${errors.notes ? "border-red-500" : ""}`}
              />
              {errors.notes && (
                <p className="text-red-500">{errors.notes.message}</p>
              )}
            </div>

            <div className="col-span-1 md:col-span-2">
              <Button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-800
                  disabled:opacity-75"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Add Job"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddJob
