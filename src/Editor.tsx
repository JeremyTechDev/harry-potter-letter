import { FC } from 'react';

interface T {
  value: string;
  setValue: (value: string) => void;
}

const Editor: FC<T> = ({ value, setValue }) => {
  return (
    <section className="h-2/3 w-full p-4">
      <p className="text-xl font-spell">Write your letter below:</p>

      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          localStorage.setItem('letterContent', e.target.value);
        }}
        placeholder="Dear Harry Potter..."
        className="w-full h-4/6 p-1 resize-none bg-transparent text-2xl"
      />

      <p className="font-spell">
        Made with ❤️ by{' '}
        <a
          href="https://twitter.com/askjere"
          target="_blank"
          className="underline"
          rel="noreferrer"
        >
          Jeremy
        </a>
      </p>
    </section>
  );
};

export default Editor;
