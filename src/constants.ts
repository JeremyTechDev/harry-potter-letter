export const LOGO_OPTIONS: iOption[] = [
  {
    label: 'Hogwarts',
    img: './hogwarts.png',
  },
  {
    label: 'Wizengamot',
    img: './jury.png',
  },
  {
    label: 'The Dark Mark',
    img: './dark_mark.png',
  },
];

export const SIGNATURE_OPTIONS: iOption[] = [
  {
    label: 'Albus Dumbledore',
    img: './albus.png',
  },
  {
    label: 'Minerva McGonagall',
    img: './minerva.png',
  },
  {
    label: 'Lord Voldemort',
    img: './voldemort.png',
  },
  {
    label: 'Dolores Umbridge',
    img: './dolores.png',
  },
];

export interface iOption {
  label: string;
  img: string;
}

export interface iConfig {
  logo: iOption;
  signature: iOption;
}
