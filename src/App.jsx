import PostsList from "./components/PostsList";

// const DUMMY_LISTS = [
//   { author: "Immanual", body: "React.js is awesome!" },
//   { author: "Imman", body: "React.js is awesome!" },
// ];

function App() {
  return (
    <>
      {/* <main>
        <Post
          author="Immanual"
          body="React.js is awesome!"
        />
        <Post
          author="Imman"
          body="Check out the full course!"
        />
      </main>
      <ul>
        {DUMMY_LISTS.map((listItem) => (
          <Post
            title={listItem.author}
            body={listItem.body}
          />
        ))}
      </ul> */}
      <PostsList />
    </>
  );
}

export default App;
