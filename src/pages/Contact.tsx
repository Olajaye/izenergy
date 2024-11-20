import {  useSelector } from 'react-redux';
import {  RootState } from '../stores/store';

const Contact = () => {
  // const dispatch = useDispatch<AppDispatch>(); 
  const { data } = useSelector((state: RootState) => state.auth); 
  console.log(data)
  return (

    <div className='mt-30 pt-32 h-[400px] w-full'></div>
  )
}

export default Contact