import { useQuery } from "@apollo/client"
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from "../graphql/queries"
import Post from "./Post";
import { Jelly } from "@uiball/loaders";

type Props = {
  topic?: string
}

function Feed({topic}: Props) {
  const { data, error } = !topic 
    ? useQuery(GET_ALL_POSTS)
    : useQuery(GET_ALL_POSTS_BY_TOPIC, {
        variables: {
          topic: topic,
        }
  });

  const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic

  if(!posts) return (
    <div className="flex relative top-30 w-full items-center justify-center p-10 text-xl">
      <Jelly 
        size={80}
        speed={0.9} 
        color="#00ce79" 
        />
    </div>
  )
  return (
    <div className="mt-5 space-y-4">
      {posts?.map(post => 
        <div key={post.id}>
          <Post key={post.id} post={post}/>
        </div>
      )}
    </div>
  )
}

export default Feed