import { FC } from 'react';
import { iConfig } from './constants';

interface T {
  value: string;
  config: iConfig;
}

const Preview: FC<T> = ({ value, config }) => {
  return (
    <section id="preview" className="relative w-1/2 bg-old py-12 px-6">
      <img
        alt="Torn Paper"
        src="./torn.png"
        className="w-full absolute left-0 top-0 rotate-180"
      />

      <img
        alt={config.logo.label}
        src={config.logo.img}
        className="max-w-48 max-h-48 mx-auto my-0"
      />

      <pre className="mt-10 mb-32 break-words whitespace-pre-line font-handwritten text-5xl">
        {value}
      </pre>

      <div>
        <img
          alt={config.signature.label}
          src={config.signature.img}
          className="w-52 absolute bottom-10 left-4"
        />
      </div>

      <img
        alt="Torn Paper"
        src="./torn.png"
        className="w-full absolute left-0 bottom-0"
      />
    </section>
  );
};

export default Preview;
