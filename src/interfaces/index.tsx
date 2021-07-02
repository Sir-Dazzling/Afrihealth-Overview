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
};

export type TeamMemberItemProps = {
  imgUrl: string;
  title?: string;
  firstName: string;
  lastname: string;
  position: string
};

export type PricingItemProps = {
  title: string;
  desc: string;
  price: number;
  color: string;
};