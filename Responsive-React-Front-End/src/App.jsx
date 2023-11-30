import React from "react"
import {Header, Info, Topics, Blog, Footer, Testimonial} from './components'

const App = () => {
   /* const [posts,setPosts] = useState([]);
   
   useEffect(() => {
    const query = '*[_type == "posts"] ';

    client.fetch(query).then((data) => {
      setPosts(data);
    });
   },[]);
 */

  return (
    <>
      <Header></Header>
      {/* {<h1>{posts[1] && posts[1].title}</h1>} */}
      
      <Topics></Topics>
      <Info></Info>
      <Blog></Blog>
      <Testimonial></Testimonial>
      <Footer></Footer>


    </>
    
    
  )
}

export default App