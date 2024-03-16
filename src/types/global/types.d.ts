declare type SimpleObject<T = unknown> = {[key: string]: T};

interface CustomComponent {
  className?: string;
  id?: string;
}

interface SelectOption {
  value: string | number;
  label: string;
}
