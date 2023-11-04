import Image from 'next/image';
import People5Img from '@/assets/img/people5.png';
import People6Img from '@/assets/img/people6.png';

const People3 = () => {
  return (
    <div className='relative'>
      <div className="people5 people-absolute ">
        <Image src={People5Img} alt='' />
      </div>
      <div className="people6">
        <Image src={People6Img} alt='' />
      </div>
    </div>
  )
}

export default People3
