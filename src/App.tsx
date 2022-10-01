import { graphql, useLazyLoadQuery } from "react-relay";
import { AppQuery } from "./__generated__/AppQuery.graphql";

function App() {
  const { user } = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery($id: String!) {
        user(id: $id) {
          id
          fav
        }
      }
    `,
    { id: "jser1" }
  );

  return (
    <div>
      {user?.id}, fav: {user?.fav}
    </div>
  );
}

export default App;
