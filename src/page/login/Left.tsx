import React from 'react';
import { Carousel } from 'antd';

const imgs = [
  'src/assets/img/6.jpg',
  'src/assets/img/2.jpg',
  'src/assets/img/3.png',
  'src/assets/img/4.png',
  'src/assets/img/1.jpg',
]

let len = imgs.length, index; // index: 随机数
for (let point = len - 1; point >= 0; point--) {
    index = Math.floor(Math.random() * point);
    // 交换两个元素的值(在上一篇介绍过几种方法)
    imgs[index] = [imgs[point], imgs[point] = imgs[index]][0];
}
const LeftCarousel = () => {
  
  return (
    <Carousel effect="fade" style={{}} autoplay speed={2000} autoplaySpeed={5000}>
      {
        imgs.map((item,index) => (
          <div key={index} >
            <img src={item} style={{width: '100%',height: '100vh', objectFit: 'cover'}}/>
          </div>
        ))
      }
    </Carousel>
  );
} 
export default LeftCarousel;