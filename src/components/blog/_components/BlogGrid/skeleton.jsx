export const BlogSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-pulse">
      {[1, 2, 3].map((item) => (
        <div key={item} className="bg-white rounded-xl shadow-sm p-4">
          <div className="w-full h-48 bg-gray-200 rounded-lg mb-4" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      ))}
    </div>
   );