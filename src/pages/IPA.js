import ipaChartSrc from 'assets/images/ipa/ipa-chart.png';
import ipaTableSrc from 'assets/images/ipa/ipa-table.jpg';
import structuresofIPA from 'assets/images/ipa/structuresofIPA.jpg';
import Consonants from 'components/IPA/Consonants';
import Diphthongs from 'components/IPA/Diphthongs';
import Vowels from 'components/IPA/Vowels';
import useTitle from 'hooks/useTitle';
import React from 'react';

function IPAPage() {
  useTitle('IPA');

  return (
    <div className="container dyno-box">
      <Vowels />
      <Diphthongs />
      <Consonants />

      {/* ipa chart */}
      <h2 className="dyno-title">4. Biểu đồ IPA (IPA Chart)</h2>
      <div
        className="w-100 my-10 t-center"
        style={{ maxWidth: 450, margin: 'auto' }}>
        <img src={ipaChartSrc} alt="IPA Chart" className="w-100 mb-4" />
        <a
          className="dyno-link"
          href="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet"
          target="_blank"
          rel="noreferrer">
          Nguồn: Wikipedia
        </a>
        <img src={structuresofIPA} alt="structures of IPA" className="w-100 mb-4" />
        <a
          className="dyno-link"
          href="https://google.com"
          target="_blank"
          rel="noreferrer">
          Nguồn: Internet
        </a>
      </div>

      {/* summary */}
      <h2 className="dyno-title">5. Tóm lượt (Summary)</h2>

      <img src={ipaTableSrc} alt="IPA Table" className="w-100 mb-4" />
      <div
        className="w-100 my-10 t-center"
        style={{ maxWidth: 450, margin: 'auto' }}>
        
      </div>
    </div>
  );
}

export default IPAPage;
