import { Fragment } from 'react';

function MeetupDetails(props) {
  return (
    <Fragment>
      <img
        src={props.meetupData.image}
        alt=""
      />
      <h1>{props.meetupData.title}</h1>
      <address>{props.meetupData.address}</address>
      <p>{props.meetupData.description}</p>
    </Fragment>
  );
}

export async function getStaticPaths(){

  return {
    fallback:false,
    paths:[
      {
        params:{
          meetupId:'m1',
        }
      },
      {
        params:{
          meetupId:'m2',
        }
      }
    ]
  }
}

export async function getStaticProps(context){

  const meetupId= context.params.meetupId;
    return {
      props:{
        meetupData:{
          id:meetupId,
          image:'https://static.toiimg.com/thumb/msid-91336769,imgsize-39762,width-400,resizemode-4/91336769.jpg',
          title:'A First Meetup',
          address:'Some Street 5, Some City',
          description:'The meetup description'
        }
      }
    }
}

export default MeetupDetails;