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

const dummyData = [
  {
    title: "Result 1",
    description:
      "This is the description for result 1. Congratulations to all the successful candidates.",
  },
  {
    title: "Result 2",
    description:
      "This is the description for result 2. Best wishes for your future endeavors.",
  },
  {
    title: "Result 3",
    description:
      "This is the description for result 3. Keep up the great work and aim higher.",
  },
  {
    title: "Result 4",
    description:
      "This is the description for result 4. Your hard work has paid off.",
  },
  {
    title: "Result 5",
    description:
      "This is the description for result 5. Continue to strive for excellence.",
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

      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {dummyData.map((data, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                    <p className="text-center">{data.description}</p>
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
  );
};

export default TopResultsHome;
