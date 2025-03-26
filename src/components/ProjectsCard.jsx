import image from "../assets/images/image-1.jpg";

export const ProjectsCard = () => {
  return (
    <a href="#">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-1 transition-all">
        <img class="rounded-t-lg" src={image} alt="" />
        <div class="p-2">
          <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Project Placeholder
          </h5>
        </div>
      </div>
    </a>
  );
};
