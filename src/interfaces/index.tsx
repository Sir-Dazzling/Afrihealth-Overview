export type LayoutTypes = {
    title?: String;
    className?: string;
};

export type TelecareItemTypes = {
    id: number;
    imageUrl: string;
    desc: string;
    link: string;
    type: string;
};

export type BreakPoint = {
    width: number;
    itemsToShow: number;
  };
  

export type HealthCarouselProps = {
    breakPoints: BreakPoint[];
    data: TelecareItemTypes[];
  }