import { useEffect, useState } from "react";
import fetchGraphQL from "./fetchGraphQL";

function App() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(
      `
      query RootQuery {
        hello
      }
    `,
      {}
    )
      .then((response) => {
        setTitle(response.data.hello);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, []);
  return <div>{title}</div>;
}

export default App;
