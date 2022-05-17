import { useParams,Route } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
const DUMMY_QUOTES= [
  {id:'q1',author:'Max', text:'Learning React is fun!'},
  {id:'q2',author:'Meet', text:'dasdasda sAS SAs sAsLearning React is fun!'},
  
  ];
const QuotesDetails = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote=>quote.id === params.quoteId);
  if(!quote){
    return <p>not quote found</p>
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quote/${params.quoteId}/comments`}>
          <Comments/>
      </Route>
    </Fragment>
  );
};

export default QuotesDetails;
