import Link from "next/link";
import Image from "next/image";

import { ExternalLink, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function EpisodeCard({ episode }) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="md:flex">
          {/* Thumbnail (full width on mobile, left side on desktop) */}
          <div className="relative md:w-2/5">
            <Image
              src={episode.thumbnail || "/placeholder.svg"}
              alt={`Thumbnail para ${episode.title}`}
              width={480}
              height={270}
              className="w-full h-full object-cover aspect-video"
              priority
              quality={95}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Link href={episode.youtubeUrl} target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Play className="h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
  
          {/* Description (right side) */}
          <div className="p-6 md:w-3/5 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-3">{episode.title}</h2>
              <p className="text-gray-700 mb-4 whitespace-pre-line">{episode.description}</p>
            </div>
  
            <div className="mt-auto">
              <Link href={episode.youtubeUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="default" className="w-full sm:w-auto rounded-xl">
                  Ver en YouTube
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    )
  }