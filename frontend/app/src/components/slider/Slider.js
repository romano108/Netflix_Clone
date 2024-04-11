import React, { useEffect, useState } from 'react';
import './slider.css';
import house_01 from '../../assets/house_01.jpg';
import house_02 from '../../assets/house_02.jpg';
import house_03 from '../../assets/house_03.jpg';
import house_04 from '../../assets/house_04.jpg';
import house_05 from '../../assets/house_05.jpg';

const MyCollection = [
  {
    label: 'First Picture',
    imgPath: house_01,
  },
  {
    label: 'Second Picture',
    imgPath: house_02,
  },
  {
    label: 'Third Picture',
    imgPath: house_03,
  },
  {
    label: 'Fourth Picture',
    imgPath: house_04,
  },
  {
    label: 'Fifth Picture',
    imgPath: house_05,
  },
];
const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      index === MyCollection.length - 1 ? setIndex(0) : setIndex(index + 1);
    }, 2000);
  });

  return (
    <div className="slider-height bg-slate-200	">
      <img
        className="slider-height"
        src={MyCollection[index].imgPath}
        alt={MyCollection[index].imgPath}
      />
    </div>
  );
};

export default Slider;
