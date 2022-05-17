import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUP = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Indian_tent_turtle_%28Pangshura_tentoria_tentoria%29.jpg/800px-Indian_tent_turtle_%28Pangshura_tentoria_tentoria%29.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'dsasdasds dasdasa dasdas dasdad dasdasd dasdas dasdas',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://static.toiimg.com/thumb/msid-91336769,imgsize-39762,width-400,resizemode-4/91336769.jpg',
    address: 'Some adddasdress 5, 2344232 Some City',
    description: 'dsasdasds dasdasa dasdas dasdad dasdasd dasdas dasdas',
  },
  {
    id: 'm3',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Indian_tent_turtle_%28Pangshura_tentoria_tentoria%29.jpg/800px-Indian_tent_turtle_%28Pangshura_tentoria_tentoria%29.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'dsasdasds dasdasa dasdas dasdad dasdasd dasdas dasdas',
  },
  {
    id: 'm4',
    title: 'A Second Meetup',
    image:
      'https://static.toiimg.com/thumb/msid-91336769,imgsize-39762,width-400,resizemode-4/91336769.jpg',
    address: 'Some adddasdress 5, 2344232 Some City',
    description: 'dsasdasds dasdasa dasdas dasdad dasdasd dasdas dasdas',
  },
];
function HomePage(props) {
  return <MeetupList  meetups={props.meetups}/>;
}

export async function getServerSideProps(context){
    const req= context.req;
    const res= context.res;

    return {
        props:{
            meetups: DUMMY_MEETUP,
            revalidate:2
        }
    }
}

// export async function getStaticProps(){
//     return {
//         props:{
//             meetups: DUMMY_MEETUP,
//             revalidate:2
//         }
//     }
// }
export default HomePage;
