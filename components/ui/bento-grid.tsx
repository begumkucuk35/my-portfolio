import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  imgClassName,
  titleClassName,
  img,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1] overflow-hidden relative",
        className
      )}
      style={{
        background: "linear-gradient(103.4deg, #04071D 16.66%, #0C0E23 81.61%)",
        border: "1px solid",
        borderImageSource:
          " linear-gradient(180deg, rgba(54, 55, 73, 0.43) 0%, rgba(54, 55, 73, 0.49) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
      <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
      </div>
      <div>
        {spareImg && (
          <img
            src={spareImg}
            alt={spareImg}
            className="object-cover object-center w-full h-full"
          />
        )}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
      </div>
    </div>
  );
};
