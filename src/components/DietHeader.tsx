import React from "react";

interface DietHeaderProps {
  title: string;
  subtitle: string;
}

export const DietHeader: React.FC<DietHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
        {subtitle}
      </p>
    </section>
  );
};
