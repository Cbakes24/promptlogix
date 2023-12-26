
import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className='lg:hidden' /> 
            <span className='orange_gradient text-center max-md:text-3xl'> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Promptlogix is an open-source AI prompting 
            tool for the modern world to discover, create, and share creative prompts  
        </p>
    </section>
  )
}

export default Home
