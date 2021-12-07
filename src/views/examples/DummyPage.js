import { useState, useEffect } from "react";

import { getAuth } from "firebase/auth";

import axios from "axios";
import { useHistory } from "react-router";

function DummyPage() {
  const history = useHistory();
  const auth = getAuth();

  const [State, setState] = useState("Not Signed In");

  useEffect(() => {
    const users = auth.currentUser;
    if (users == null) {
      history.push("/auth/login");
    } else {
      axios
        .post("https://registertest.free.beeceptor.com/init", {
          uid: users.uid,
          email: users.email,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response.status);
          if (err.response.status == 429) {
            setState("USER HAS SIGNED IN");
          }
        });
    }
  }, []);

  return (
    <div>
      <h1
        style={{
          marginTop: 200,
          color: "white",
        }}
      >
        {State}
      </h1>
    </div>
  );
}

export default DummyPage;
