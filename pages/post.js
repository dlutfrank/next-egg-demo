import Header  from "../components/Header";
export default (props) => (
  <div>
  <Header></Header>
    <p>This is the blog post content.</p>
    <h1>{props.url.query.title}</h1>
  </div>
)