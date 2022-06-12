import { FC } from 'react';
import { iConfig, iOption, LOGO_OPTIONS, SIGNATURE_OPTIONS } from './constants';

interface T {
  config: iConfig;
  isLoading: boolean;
  onSave: () => void;
  setConfig: React.Dispatch<React.SetStateAction<iConfig>>;
}

const Configurations: FC<T> = ({ config, isLoading, onSave, setConfig }) => {
  return (
    <section className="flex flex-col justify-center py-10 px-4">
      <h1 className="font-bold text-4xl text-center font-spell">
        Create a <span className="text-6xl font-harryPotter">Harry Potter</span>{' '}
        Themed Letter
      </h1>

      <div className="flex font-spell justify-evenly text-lg my-6">
        <div>
          <label htmlFor="logo" className="mr-2">
            Logo:
          </label>
          <select
            name="logo"
            id="logo"
            value={config.logo.label}
            className="py-1 px-2 rounded bg-transparent border border-rd outline-none"
            onChange={(e) =>
              setConfig((prev) => ({
                ...prev,
                logo: LOGO_OPTIONS.find(
                  ({ label }) => label === e.target.value,
                ) as iOption,
              }))
            }
          >
            {LOGO_OPTIONS.map(({ label, img }) => (
              <option key={img} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="signature" className="mr-2">
            Signature:
          </label>
          <select
            name="signature"
            id="signature"
            value={config.signature.label}
            className="py-1 px-2 rounded bg-transparent border border-rd outline-none"
            onChange={(e) =>
              setConfig((prev) => ({
                ...prev,
                signature: SIGNATURE_OPTIONS.find(
                  ({ label }) => label === e.target.value,
                ) as iOption,
              }))
            }
          >
            {SIGNATURE_OPTIONS.map(({ label, img }) => (
              <option key={img} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={onSave}
        className="block w-full bg-rd text-white py-2 px-4 rounded-xl text-4xl font-harryPotter hover:bg-drd"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Save Letter'}
      </button>
    </section>
  );
};

export default Configurations;
