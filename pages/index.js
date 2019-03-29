import Link from 'next/link';
import Header from '../components/Header';
const PostLink = (props) => (
  <li>
  <Link as={`/p/${props.id}`}
        href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
  </Link>
  </li>
)

const Index = ()=>(
  <div>
  <Header></Header>
  <p>Hello Next.js</p>
  <ul>
    <PostLink id="hello-nextjs" title="Hello Next.js"/>
    <PostLink id="learn-nextjs" title="Learn Next.js"/>
    <PostLink id="dev-nextjs" title="Develop Next.js"/>
  </ul>
  <Link href="/about"><a>About Page</a></Link>
  </div>
)

export default Index;