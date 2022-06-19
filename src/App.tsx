import { useState } from 'react';
import { toPng } from 'html-to-image';

import Configurations from './Configurations';
import { iConfig, LOGO_OPTIONS, SIGNATURE_OPTIONS } from './constants';
import Editor from './Editor';
import Preview from './Preview';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [letterContent, setLetterContent] = useState(
    localStorage.getItem('letterContent') || '',
  );
  const [config, setConfig] = useState<iConfig>({
    logo: LOGO_OPTIONS[0],
    signature: SIGNATURE_OPTIONS[0],
  });

  const onSave = () => {
    setIsLoading(true);
    toPng(document.getElementById('preview') as any, {})
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'letter.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        alert('Sorry, something went wrong. Please try again.');
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (window.innerWidth < 990) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <img alt="Rotate Phone" src="./rotate.png" />
        Rotate your device to landscape orientation.
      </div>
    );
  }

  return (
    <main className="flex bg-paper">
      <section className="w-1/2 h-screen bg-paper top-0 sticky">
        <Configurations
          isLoading={isLoading}
          onSave={onSave as any}
          config={config}
          setConfig={setConfig}
        />

        <Editor value={letterContent} setValue={setLetterContent} />
      </section>

      <Preview value={letterContent} config={config} />
    </main>
  );
};

export default App;
