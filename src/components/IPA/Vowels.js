import { VOWELS } from 'constant/ipa';
import React from 'react';
import IPAGroupCollapse from './GroupCollapse';

function Vowels() {
  return (
    <>
      <h2 className="dyno-title">Lời mở đầu: </h2>
      <h3 className="dyno-sub-title" >
      Bảng phiên âm tiếng Anh quốc tế <strong>- International Phonetic Alphabet</strong> (IPA) là bảng ký hiệu ngữ âm quốc tế mà chúng ta cần nắm vững khi bắt đầu học tiếng Anh.
      <br/>
      Gồm có <strong>44</strong> âm (sounds) trong đó có <strong>20</strong> nguyên âm (vowel sounds) và <strong>24</strong> phụ âm (consonant sounds).
      </h3>
      <h3 className="dyno-sub-title">Mình sẽ chia thành từng nhóm nhỏ để giúp các bạn học vui hơn và ghi nhớ tốt hơn .</h3>
      <h2 className="dyno-title">1. Nguyên âm đơn (Vowels)</h2>
      <h3 className="dyno-sub-title">
        Chúng ta có 12 nguyên âm đơn, mình chia làm 5 nhóm:
      </h3>

      {VOWELS.map((item, key) => (
        <IPAGroupCollapse
          title={item.title}
          phoneticList={item.list}
          key={key}
        />
      ))}
    </>
  );
}

export default Vowels;
