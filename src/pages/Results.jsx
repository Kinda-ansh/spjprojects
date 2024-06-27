import React, { useEffect, useState } from "react";
import Common from "../components/commonComponent/Common";
import axiosInstance from "../utils/axiosConfig";
import Loading from "../components/loading/Loading";

const Results = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchResults = async (page) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/gov/result?page=${page}`);
      const fetchedData = response.data.data.TotalResults;
      if (fetchedData.length > 0) {
        setData((prevData) => [...prevData, ...fetchedData]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
      setHasMore(false); // Ensure hasMore is set to false on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="my-8">
        <h1 className="text-3xl text-center font-semibold">
          All <span className="text-sarkari">Results</span>
        </h1>
        <p className="text-lg text-center">
          Here is the latest top results, these results coming from sarkari
          result website.
        </p>
      </div>

      <div className="w-full flex gap-5">
        {/* data portion */}
        <div className="lg:w-3/4">
          {data.length === 0 && !loading && !hasMore && (
            <p className="text-center">No data available</p>
          )}
          <Common data={data} />
          {loading && <p className="text-center"><Loading/></p>}
          {!loading && hasMore && (
            <div className="text-center my-4">
              <button
                onClick={handleLoadMore}
                className="border-primary text-primary hover:text-white border-2 px-5 rounded-md py-2 hover:bg-primary text-sm"
              >
                Load More
              </button>
            </div>
          )}
          {!loading && !hasMore && data.length > 0 && (
            <p className="text-center py-5">No more data available</p>
          )}
        </div>
        {/* advertisement partion.. hidden on small screen */}
        <div className="hidden lg:flex border-2 w-1/4 h-100"></div>
      </div>
    </>
  );
};

export default Results;
