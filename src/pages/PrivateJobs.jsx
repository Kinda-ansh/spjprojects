import React, { useEffect, useState } from "react";
import PrivateJob from "../components/privateJobs/PrivateJob";
import axiosInstance from "../utils/axiosConfig";

const PrivateJobs = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchAnswerKeys = async (page) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/private/job?page=${page}`);
      const fetchedData = response.data.data.PvtJobs;
      if (fetchedData.length > 0) {
        setData((prevData) => [...prevData, ...fetchedData]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnswerKeys(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="my-8">
        <h1 className="text-3xl text-center font-semibold">
          All <span className="text-sarkari">Private Jobs</span>
        </h1>
        <p className="text-lg text-center">
          Here is the latest top Private Jobs, these Private Jobs coming from
          sarkari result website.
        </p>
      </div>

      <div className="w-full flex gap-5">
        {/* data portion */}
        <div className="lg:w-3/4">
          <PrivateJob data={data} />
          {loading && <p className="text-center">Loading...</p>}
          {!loading && hasMore && (
            <div className="text-center my-4">
              <button
                onClick={handleLoadMore}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Load More
              </button>
            </div>
          )}
          {!hasMore && <p className="text-center">No more data available</p>}
        </div>
        {/* advertisement partion.. hidden on small screen */}
        <div className="hidden lg:flex border-2 w-1/4">
          <img src="" alt="Advertisement poster" />
        </div>
      </div>
    </>
  );
};

export default PrivateJobs;
