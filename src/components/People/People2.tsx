import Image from 'next/image';
import People3Img from '@/assets/img/people3.png';
import People4Img from '@/assets/img/people4.png';

const People2 = () => {
  return (
    <div className='relative hidden md:block'>
      <div className="people3 people-absolute ">
        <Image src={People3Img} alt='' />
      </div>
      <div className="people4">
        <Image src={People4Img} alt='' />
      </div>
    </div>
  )
}

export default People2
