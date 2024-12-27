import SmoothScroll from "../components/SmoothScroll";
import { Skeleton } from "../components/ui/skeleton";

const LoadingSkeleton: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="p-4">
        {/* Skeleton for heading */}
        <Skeleton className="h-8 w-3/4 bg-gray-300 mb-4 rounded-md" />

        {/* Skeleton for sub-heading */}
        <Skeleton className="h-6 w-1/2 bg-gray-300 mb-6 rounded-md" />

        {/* Skeleton for card list (3 cards) */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-3">
          <div className="p-4 border border-gray-200 rounded-md">
            <Skeleton className="h-40 bg-gray-300 rounded-md mb-4" />
            <Skeleton className="h-4 w-3/4 bg-gray-300 mb-2 rounded-md" />
            <Skeleton className="h-4 w-1/2 bg-gray-300 rounded-md" />
          </div>
          <div className="p-4 border border-gray-200 rounded-md">
            <Skeleton className="h-40 bg-gray-300 rounded-md mb-4" />
            <Skeleton className="h-4 w-3/4 bg-gray-300 mb-2 rounded-md" />
            <Skeleton className="h-4 w-1/2 bg-gray-300 rounded-md" />
          </div>
          <div className="p-4 border border-gray-200 rounded-md mt-3">
            <Skeleton className="h-40 bg-gray-300 rounded-md mb-4" />
            <Skeleton className="h-4 w-3/4 bg-gray-300 mb-2 rounded-md" />
            <Skeleton className="h-4 w-1/2 bg-gray-300 rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 border border-gray-200 rounded-md">
            <Skeleton className="h-40 bg-gray-300 rounded-md mb-4" />
            <Skeleton className="h-4 w-3/4 bg-gray-300 mb-2 rounded-md" />
            <Skeleton className="h-4 w-1/2 bg-gray-300 rounded-md" />
          </div>
          <div className="p-4 border border-gray-200 rounded-md">
            <Skeleton className="h-40 bg-gray-300 rounded-md mb-4" />
            <Skeleton className="h-4 w-3/4 bg-gray-300 mb-2 rounded-md" />
            <Skeleton className="h-4 w-1/2 bg-gray-300 rounded-md" />
          </div>
          <div className="p-4 border border-gray-200 rounded-md">
            <Skeleton className="h-40 bg-gray-300 rounded-md mb-4" />
            <Skeleton className="h-4 w-3/4 bg-gray-300 mb-2 rounded-md" />
            <Skeleton className="h-4 w-1/2 bg-gray-300 rounded-md" />
          </div>
        </div>
      </div>
    </SmoothScroll>
  );
};

export default LoadingSkeleton;
