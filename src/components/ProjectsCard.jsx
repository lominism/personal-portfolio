export const ProjectsCard = ({ link, image, title }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-1 transition-all">
        <img
          className="rounded-t-lg object-cover h-52 w-full block mx-auto"
          src={image}
          alt=""
        />
        <div className="p-2 h-20">
          <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>
      </div>
    </a>
  );
};
