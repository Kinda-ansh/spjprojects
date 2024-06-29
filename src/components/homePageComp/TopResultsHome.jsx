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
import Loading from "../loading/Loading";

const TopResultsHome = ({ data }) => {
  if (!data || data.length === 0) {
    return <Loading />; // Replace with your loading component
  }

  return (
    <div className="pt-10 flex justify-center flex-col items-center">
      <div className="my-8">
        <h1 className="text-3xl text-center font-semibold">
          Top <span className="text-sarkari">Results</span>
        </h1>
        <p className="text-lg text-center">Here is the latest top results.</p>
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
          className="w-[320px] lg:w-full max-w-[900px]  md:ml-20  md:mr-20"
        >
          <CarouselContent>
            {data?.map((key, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="p-6">
                      <a href={key.joburl} target="_blank">
                        <h2 className="text-xl font-bold mb-2 text-[#25324B]">
                          {key.jobtitle.substring(0, 15)}
                          {key.jobtitle.length > 15 && "..."}
                        </h2>
                      </a>
                      <p className="flex items-center gap-2">
                        click to view details <IoArrowForwardOutline />
                      </p>
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
