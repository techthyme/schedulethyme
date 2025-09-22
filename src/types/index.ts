export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}