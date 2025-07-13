export default function SkillCard({ title }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600">
      <h3 className="text-center font-medium text-gray-800 dark:text-gray-100">
        {title}
      </h3>
    </div>
  );
}