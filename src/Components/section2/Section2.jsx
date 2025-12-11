import React from 'react'
import Usecard from '../section1/Usecard'

const Section2 = () => {
  return (
    <div className='px-2 py-2 m-10 flex justify-between '>
      <Usecard 
  logo="https://imgs.search.brave.com/E9sfq0QN5zsXSY7_q6_VjSUmJktbiPkkPPo8IOXxSFo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWxp/c3Nhc21pdGhhcnQu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzAyL2NhdHNf/cGV0X3BvcnRyYWl0/X211bHRpcGxlLTc2/OHg1OTkuanBn"
  title="British Shorthair"
  description="Calm, sweet, and teddy-bear like. Great with families."
/>

<Usecard 
  logo="https://cdn2.thecatapi.com/images/MTY3ODIyOQ.jpg"
  title="Siamese"
  description="Vocal, elegant, and very intelligent with striking blue eyes."
/>

<Usecard 
  logo="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
  title="Maine Coon"
  description="Large, fluffy, friendly, and dog-like in personality."
/>

<Usecard 
  logo="https://cdn2.thecatapi.com/images/BJa4kxc4X.jpg"
  title="Bengal"
  description="Energetic and wild-looking with leopard-style spots."
/>
    </div>
  )
}

export default Section2
