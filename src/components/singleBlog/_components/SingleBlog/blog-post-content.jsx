import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function BlogPostContent({ content }) {
  return (
    <div className="space-y-6 ">
      {content?.map((block, index) => {
        if (block.type === "heading" && block.level === 1) {
          return (
            <h1 key={index} className="text-5xl">
              {block.children?.map((child, childIndex) => {
                return (
                  <span
                    key={childIndex}
                    className={`${child.bold ? "font-bold" : ""}`}
                  >
                    {child.text}
                  </span>
                );
              })}
            </h1>
          );
        }
        if (block.type === "heading" && block.level === 2) {
          return (
            <h2 key={index} className="text-3xl">
              {block.children?.map((child, childIndex) => {
                return (
                  <span
                    key={childIndex}
                    className={`${child.bold ? "font-bold" : ""}`}
                  >
                    {child.text}
                  </span>
                );
              })}
            </h2>
          );
        }
        if (block.type === "heading" && block.level === 3) {
          return (
            <h3 key={index} className="text-2xl">
              {block.children?.map((child, childIndex) => {
                return (
                  <span
                    key={childIndex}
                    className={`${child.bold ? "font-bold" : ""}`}
                  >
                    {child.text}
                  </span>
                );
              })}
            </h3>
          );
        }
        if (block.type === "list" && block.format === "ordered") {
          return (
            <ol key={index} className="list-decimal list-inside">
              {block.children?.map((child, childIndex) => {
                return (
                  <li key={childIndex}>
                    {child.children?.map((child, childIndex) => {
                      return (
                        <>
                          <span
                            key={childIndex}
                            className={`${child.bold ? "font-bold" : ""}`}
                          >
                            {child.text}
                          </span>
                          
                        </>
                      );
                    })}
                  </li>
                );
              })}
            </ol>
          );
        }
        if (block.type === "list" && block.format === "unordered") {
          return (
            <ul key={index} className="list-disc list-inside">
              {block.children?.map((child, childIndex) => {
                return (
                  <li key={childIndex}>
                    {child.children?.map((child, childIndex) => {
                      return (
                        <>
                          <span
                            key={childIndex}
                            className={`${child.bold? "font-bold" : ""}`}
                          >
                            {child.text}
                          </span>
                        </>
                      );
                    })}
                  </li>
                );
              })}
            </ul>
          )
        }
        if (block.type === "image" && block.image) {
          return (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={block.image.url}
                  width={block.image.width}
                  height={block.image.height}
                  alt={block.image.alternativeText}
                />
              </CardContent>
            </Card>
          );
        }
        if (block.type === "paragraph") {
          return (
            <h1 key={index} className="text-base leading-relaxed">
              {block.children?.map((child, childIndex) => {
                if (child.bold) {
                  return (
                    <span key={childIndex} className="">
                      {child.text}
                    </span>
                  );
                }
                return child.text;
              })}
            </h1>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote key={index} className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 ">
              {block.children?.map((child, childIndex) => {
                return (
                  <span key={childIndex} className="text-base italic font-medium leading-relaxed text-gray-900">
                    {child.text}
                  </span>
                );
              })}
            </blockquote>
          );
          
        }
        return null;
      })}
    </div>
  );
}
