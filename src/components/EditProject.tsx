import { useForm } from "react-hook-form";
import CustomModal from "./CustomModal";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import RichTextEditor from "./RichTextEditor";
import { useState, useEffect } from "react";
import { RiLoader2Line } from "react-icons/ri";
import { ScrollArea } from "./ui/scroll-area";
import { countries } from "../constants/countries";
import { updateProject } from "../api/addProject";
import { useToast } from "../hooks/use-toast";

interface EditProjectProps {
  isOpen: boolean;
  toggleModal: () => void;
  onEditProject: (update: (prev: any[]) => any[]) => void;
  projectData: FormData | any;
}

interface FormData {
  id: string;
  projectName: string;
  location: string;
  userCount: number;
  status: string;
  details: string;
  image: FileList;
}

function EditProject({
  isOpen,
  toggleModal,
  onEditProject,
  projectData,
}: EditProjectProps) {
  const [onSubmitButtonClick, setOnSubmitButtonClick] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(
    projectData?.image || null
  );

  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (projectData) {
      setValue("projectName", projectData.name);
      setValue("location", projectData.location);
      setValue("userCount", projectData.userCount);
      setValue("details", projectData.details);
      setValue("status", projectData.status);
      setPreviewImage(projectData.image); // Set initial preview image
    }
  }, [projectData, setValue]);

  const onSubmit = async (data: FormData) => {
    setOnSubmitButtonClick(true);
    const formData = new FormData();

    formData.append("id", projectData._id);
    formData.append("name", data.projectName);
    formData.append("location", data.location);
    formData.append("userCount", data.userCount.toString());
    formData.append("details", data.details);
    formData.append("status", data.status);

    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }

    try {
      const res = await updateProject(projectData._id, formData);

      if (res.status === 200) {
        onEditProject((prev: any) =>
          prev.map((project: any) =>
            project._id === res.data._id ? res.data : project
          )
        );

        toast({
          title: "Project Updated",
          description: "Project has been updated successfully",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Error updating project",
        variant: "destructive",
      });
    }
    setTimeout(() => {
      setOnSubmitButtonClick(false); // Reset loading state
      toggleModal(); // Close modal after submission
    }, 2000); // Replace this with actual API call in production
  };

  const handleDetailsChange = (value: string) => {
    setValue("details", value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file)); // Set new image preview
    }
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Details
            </label>
            <RichTextEditor
              value={(projectData && projectData.details) || ""}
              onChange={handleDetailsChange}
              placeholder="Enter details here..."
            />
            {errors.details && (
              <p className="text-red-500">Details are required</p>
            )}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              User Count
            </label>
            <Input
              type="number"
              {...register("userCount", { required: true })}
              placeholder="Enter user count"
              defaultValue={(projectData && projectData?.userCount) || 0}
            />
            {errors.userCount && (
              <p className="text-red-500">User Count is required</p>
            )}
          </div>

          <div className="mt-4">
            <label className="block text-sm mb-2 font-medium text-gray-700">
              Status
            </label>
            <select
              {...register("status", { required: true })}
              className="block w-full px-4 py-2 mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              defaultValue={projectData?.status}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Image Preview
            </label>
            {previewImage && (
              <img
                src={previewImage}
                alt="Project"
                className="w-24 h-24 object-cover rounded-md"
              />
            )}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Image File
            </label>
            <Input
              type="file"
              accept="image/*"
              {...register("image")}
              onChange={handleImageChange} // Handle image change
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="bg-green-500 hover:bg-green-600">
              {onSubmitButtonClick ? (
                <div className="flex flex-row   items-center justify-center gap-2">
                  <RiLoader2Line className="animate-spin mr-2" />
                  Updating...
                </div>
              ) : (
                "Update"
              )}
            </Button>
          </div>
        </form>
      </ScrollArea>
    </CustomModal>
  );
}

export default EditProject;
