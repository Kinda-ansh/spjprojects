import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { date } from "zod";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const dummyData = [
  {
    title: "Rajasthan Board Class 10th Result 2024",
    date: "Date : 3 Days Ago",
    url: "https://google.com",
  },
  {
    title: "Rajasthan Board Class 10th Result 2024",
    date: "Date : 3 Days Ago",
    url: "https://facebook.com",
  },
  {
    title: "Rajasthan Board Class 10th Result 2024",
    date: "Date : 3 Days Ago",
  },
  {
    title: "Rajasthan Board Class 10th Result 2024",
    date: "Date : 3 Days Ago",
  },
];

const TopResultsHome = () => {
  return (
    <div className="pt-10 flex justify-center flex-col items-center">
      <div className="my-8">
        <h1 className="text-3xl text-center font-semibold">
          Top <span className="text-sarkari">Results</span>
        </h1>
        <p className="text-lg text-center">
          Here is the latest top results, these results coming from sarkari
          result website.
        </p>
      </div>
      <div className="ml-20 mr-20 ">
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-[350px] lg:w-full "
        >
          <CarouselContent>
            {dummyData.map((data, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-start justify-center  p-6">
                      <a href={data.url} target="_main">
                        <h2 className="text-xl font-bold mb-2 text-[#25324B]">
                          {data.title}
                        </h2>
                      </a>
                      <p className="text-center">{data.date}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div>
        <Link to="/results">
          <p className="flex items-center gap-2 mt-5 text-sarkari text-base font-medium">
            See All Results <IoArrowForwardOutline />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default TopResultsHome;
