import { React, useEffect, useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/all'
import { Link } from 'react-router-dom';
import ShopNowBtn from './ShopNowBtn'
const Slider = () => {
  const SliderData = [
    {
      title: 'Ремот и рециклиране на фарове',
      subtitle: 'Над 600 налични на склад за всякакъв модел коли!'
    },
    {
      title: 'При покупка над 1000лв',
      subtitle: 'Безплатна доставка до всяка точка на България!'
    },
    // {

    //     title: 'Тунинг Ксенонови Фарове',
    //     subtitle :'BMW серия 3 F30,F31'
    // },
  ];
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const [auto, setauto] = useState(true);
  const intervaltime = 6000;
  let slideinterval;
  const nextslide = () => {
    clearInterval(slideinterval);
    slideinterval = setInterval(nextslide, intervaltime);
    setTimeout(() => setCurrent(current === length - 1 ? 0 : current + 1))

  }
  const prevslide = () => {
    clearInterval(slideinterval);
    slideinterval = setInterval(nextslide, intervaltime);
    setTimeout(() => setCurrent(current === 0 ? length - 1 : current - 1))
  }
  useEffect(() => {
    setauto(true)
    if (auto) {
      slideinterval = setInterval(nextslide, intervaltime);
    }
    return () => {
      setauto(false);
      clearInterval(slideinterval);
    }
  })

  return (
    <div className='slider'>
      {SliderData.map((slide, index) => {
        return (
          <div key={index} className={index === current ? 'slide current' : 'slide'}>
            <h1 className='titleslider' >{slide.title}</h1>
            <h3 className='subtitleslider'>{slide.subtitle}</h3>
            <div className='content'> <Link to='/Shop'> <ShopNowBtn /></Link>  </div>
          </div>
        );

      })}
      <IoIosArrowForward className='next' size='32' onClick={nextslide} />
      <IoIosArrowBack className='prev' size='32' onClick={prevslide} />
    </div>
  )
}

export default Slider