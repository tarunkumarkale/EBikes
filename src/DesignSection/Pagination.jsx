import React from 'react';

const Pagination = () => {
  return (
    <div className="bg-white text-black">
      <div className="flex justify-center items-center mt-16">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-lg">
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-black bg-white border border-e-0 border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-800 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-200 dark:hover:text-gray-800 transition-colors duration-300 ease-in-out">Previous</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-800 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-200 dark:hover:text-gray-800 transition-colors duration-300 ease-in-out">1</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-800 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-200 dark:hover:text-gray-800 transition-colors duration-300 ease-in-out">2</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-black bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-800 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-200 dark:hover:text-gray-800 transition-colors duration-300 ease-in-out">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
