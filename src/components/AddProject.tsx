import { useForm } from "react-hook-form";
import CustomModal from "./CustomModal";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import RichTextEditor from "./RichTextEditor";
import { addNewProject } from "../api/addProject";
import { useState } from "react";
import { RiLoader2Line } from "react-icons/ri";
import { ScrollArea } from "./ui/scroll-area";
import { countries } from "../constants/countries";

interface AddProjectProps {
  isOpen: boolean;
  toggleModal: () => void;
  onAddProject: (update: (prev: any[]) => any[]) => void;
}

interface FormData {
  projectName: string;
  location: string;
  userCount: number;
  details: string;
  image: FileList;
}

// const countries = ["USA", "Canada", "India", "Australia", "Germany"];

function AddProject({ isOpen, toggleModal, onAddProject }: AddProjectProps) {
  const [onSubmitButtonClick, setOnSubmitButtonClick] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setOnSubmitButtonClick(true);
    try {
      const formData = new FormData();
      formData.append("name", data.projectName);
      formData.append("location", data.location);
      // formData.append("userCount", data.userCount.toString());
      formData.append("details", data.details);

      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      const res = await addNewProject(formData);
      console.log(res.data);

      if (res.status === 201) {
        onAddProject((prev: any) => [...prev, res.data]);
        toggleModal();
        reset();
      }
    } catch (error) {
      console.error("Failed to submit the form", error);
    } finally {
      setOnSubmitButtonClick(false);
    }
  };

  const handleDetailsChange = (value: string) => {
    setValue("details", value);
  };

  return (
    <CustomModal isOpen={isOpen} toggleModal={toggleModal}>
      <ScrollArea className="max-h-96 overflow-y-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 p-6"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Project Name
            </label>
            <Input
              {...register("projectName", { required: true })}
              placeholder="Enter project name"
            />
            {errors.projectName && (
              <p className="text-red-500">Project Name is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <select
              {...register("location", { required: true })}
              className="block w-full px-4 py-2 mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.location && (
              <p className="text-red-500">Location is required</p>
            )}
          </div>
          {/* <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Status
                    </label>
                    <select
                        {...register("status", { required: true })}
                        className="block w-full px-4 py-2 mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    {errors.status && <p className="text-red-500">Status is required</p>}
                </div> */}
          {/* <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            User Count
                        </label>
                        <Input
                            type="number"
                            {...register("userCount", { required: true, min: 0 })}
                            placeholder="Enter user count"
                        />
                        {errors.userCount && <p className="text-red-500">User count must be a positive number</p>}
                    </div> */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Details
            </label>
            <RichTextEditor
              value={""}
              onChange={handleDetailsChange}
              placeholder="Enter details here..."
            />
            {errors.details && (
              <p className="text-red-500">Details are required</p>
            )}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Image File
            </label>
            <Input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit">
              {onSubmitButtonClick ? (
                <>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <RiLoader2Line className="animate-spin mr-2" />
                    Submitting...
                  </div>
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </ScrollArea>
    </CustomModal>
  );
}

export default AddProject;
