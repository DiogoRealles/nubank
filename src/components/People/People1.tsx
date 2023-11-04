import Image from 'next/image';
import People1Img from '@/assets/img/people1.png';
import People2Img from '@/assets/img/people2.png';

const People1 = () => {
  return (
    <div className='relative'>
      <div className="people1 people-absolute ">
        <Image className='' src={People1Img} alt='' />
      </div>
      <div className="people2">
        <Image className='' src={People2Img} alt='' />
      </div>
    </div>
  )
}

export default People1
