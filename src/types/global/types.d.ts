declare type SimpleObject<T = unknown> = {[key: string]: T};

declare type Nullable<T> = T | null;

interface CustomComponent {
  className?: string;
  id?: string;
}

interface SelectOption {
  value: string | number;
  label: string;
}
