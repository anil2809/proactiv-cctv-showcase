
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
  imageUrl?: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  popular,
  imageUrl,
}: ServiceCardProps) => {
  return (
    <div
      className={`relative rounded-xl border ${
        popular ? "border-primary/50" : "dark:border-white/10 light:border-gray-200"
      } dark:bg-white/5 light:bg-white backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 group`}
    >
      {popular && (
        <Badge
          className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-white"
          variant="default"
        >
          Popular
        </Badge>
      )}

      {imageUrl && (
        <div className="absolute inset-0 rounded-xl overflow-hidden z-0 opacity-10">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary relative z-10">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mb-2 text-xl font-bold dark:text-white light:text-gray-900 relative z-10">{title}</h3>
      <p className="mb-6 text-sm dark:text-white/70 light:text-gray-600 relative z-10">{description}</p>

      <div className="mb-6 space-y-2 relative z-10">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
            <span className="text-sm dark:text-white/70 light:text-gray-600">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        className="w-full dark:border-white/10 dark:hover:bg-primary dark:hover:text-white light:border-gray-200 light:hover:bg-primary light:hover:text-white relative z-10"
      >
        Learn More
      </Button>

      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/50 via-primary/0 to-primary/0 opacity-0 transition-all duration-500 group-hover:opacity-100 blur-sm"></div>
    </div>
  );
};

export default ServiceCard;
