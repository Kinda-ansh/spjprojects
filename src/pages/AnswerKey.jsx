// import React, { useEffect, useState } from "react";
// import Common from "../components/commonComponent/Common";
// // import iconpvt from ".././assets/navbtm.png";
// import axiosInstance from "../utils/axiosConfig";

// const AnswerKey = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchAnswerKeys = async () => {
//       try {
//         const response = await axiosInstance.get("/gov/answerkey");
//         setData(response.data.data.GovAnswerKeys);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchAnswerKeys();
//   }, []);

//   return (
//     <>
//       <div className="my-8">
//         <h1 className="text-3xl text-center font-semibold">
//           All <span className="text-sarkari">Answer Key</span>
//         </h1>
//         <p className="text-lg text-center">
//           Here is the latest top Answer Key, these Answer Key coming from
//           sarkari result website.
//         </p>
//       </div>

//       <div className="w-full flex gap-5">
//         {/* data portion */}

//         <div className="lg:w-3/4">
//           <Common data={data} />
//         </div>

//         {/* advertisement partion.. hidden on small screen */}
//         <div className="hidden lg:flex border-2 w-1/4">
//           Advertisements
//           {/* <img src={iconpvt} alt="" /> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AnswerKey;

import React, { useEffect, useState } from "react";
import Common from "../components/commonComponent/Common";
// import iconpvt from ".././assets/navbtm.png";
import axiosInstance from "../utils/axiosConfig";

const AnswerKey = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchAnswerKeys = async (page) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/gov/answerkey?page=${page}`);
      const fetchedData = response.data.data.GovAnswerKeys;
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
    fetchAnswerKeys(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="my-8">
        <h1 className="text-3xl text-center font-semibold">
          All <span className="text-sarkari">Answer Key</span>
        </h1>
        <p className="text-lg text-center">
          Here is the latest top Answer Key, these Answer Key coming from
          sarkari result website.
        </p>
      </div>

      <div className="w-full flex gap-5">
        {/* data portion */}
        <div className="lg:w-3/4">
          {data.length === 0 && !loading && !hasMore && (
            <p className="text-center">No data available</p>
          )}
          <Common data={data} />
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
          {!loading && !hasMore && data.length > 0 && (
            <p className="text-center">No more data available</p>
          )}
        </div>

        {/* advertisement partion.. hidden on small screen */}
        <div className="hidden lg:flex border-2 w-1/4">
          Advertisements
          {/* <img src={iconpvt} alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default AnswerKey;
