// import React, { useEffect, useState } from "react";
// import NewsList from "../components/latestNews/NewsList";
// import newsAds from "../assets/newAds.png";
// import axiosInstance from "../utils/axiosConfig";

// const LatestNews = () => {
//   const [data, setData] = useState([]);

//   const fetchNews = async () => {
//     try {
//       const response = await axiosInstance.get("/news");
//       setData(response.data.data.TotalNews);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   return (
//     <>
//       <div className="my-8">
//         <img src={newsAds} alt="news page ads" />
//         <div className="my-8">
//           <h1 className="text-3xl text-center font-semibold">
//             Trendy <span className="text-sarkari">Latest News</span>
//           </h1>
//           <p className="text-lg text-center">
//             Here is the Top trending News, Read and aware about the trend.
//           </p>
//         </div>
//       </div>

//       <div className="w-full flex gap-5">
//         {/* data portion */}
//         <div className="lg:w-3/4">
//           <NewsList data={data} />
//         </div>

//         {/* advertisement partion.. hidden on small screen */}
//         <div className="hidden lg:flex border-2 w-1/4">
//           {/* <img src={iconpvt} alt="" /> */}
//           <div className="w-full gap-10">
//             <div
//               className="border-2 w-full mb-2"
//               style={{ height: "200px" }}
//             ></div>
//             <div
//               className="border-2 w-full mb-2"
//               style={{ height: "200px" }}
//             ></div>
//             <div
//               className="border-2 w-full mb-2"
//               style={{ height: "200px" }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LatestNews;

import React, { useEffect, useState } from "react";
import NewsList from "../components/latestNews/NewsList";
import newsAds from "../assets/newAds.png";
import axiosInstance from "../utils/axiosConfig";
import Loading from "../components/loading/Loading";

const LatestNews = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (page) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/news?page=${page}`);
      const fetchedData = response.data.data.TotalNews;
      if (fetchedData.length > 0) {
        setData((prevData) => [...prevData, ...fetchedData]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="my-8">
        <img src={newsAds} alt="news page ads" />
        <div className="my-8">
          <h1 className="text-3xl text-center font-semibold">
            Trendy <span className="text-sarkari">Latest News</span>
          </h1>
          <p className="text-lg text-center">
            Here is the Top trending News, Read and be aware of the trend.
          </p>
        </div>
      </div>

      <div className="w-full flex gap-5">
        <div className="lg:w-3/4">
          {data.length === 0 && !loading && !hasMore && (
            <p className="text-center">No data available</p>
          )}
          <NewsList data={data} />
          {loading && (
            <p className="text-center">
              <Loading />
            </p>
          )}
          {!loading && hasMore && (
            <div className="text-center my-4">
              <button
                onClick={handleLoadMore}
                className="bg-primary text-white px-4 py-2 rounded"
              >
                Load More
              </button>
            </div>
          )}
          {!loading && !hasMore && data.length > 0 && (
            <p className="text-center">No more data available</p>
          )}
        </div>

        <div className="hidden lg:flex border-2 w-1/4">
          <div className="w-full gap-10">
            <div
              className="border-2 w-full mb-2"
              style={{ height: "200px" }}
            ></div>
            <div
              className="border-2 w-full mb-2"
              style={{ height: "200px" }}
            ></div>
            <div
              className="border-2 w-full mb-2"
              style={{ height: "200px" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
