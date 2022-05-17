import { useRouter } from 'next/router';

function SomethingImportant() {

    const router = useRouter();

    console.log(router.query.newsId);

  return <h1>The SomethingImportant Page</h1>;
}

export default SomethingImportant;
