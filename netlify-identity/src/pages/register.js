import React from "react";

import Layout from "components/Layout";
import {RegisterForm} from "components/Form/register"

const RecoveryPage = props => {
  const [invite_token, set_invite_token] = React.useState("");

  React.useEffect(() => {
    const url = new URL(window.location.href.replace(/#/g, "?"));
    const token = url.searchParams.get("invite_token");

    set_invite_token(token);
  }, []);

  return (
    <Layout pageTitle='Recovery' pageDescription='' {...props}>
      <RegisterForm inviteToken={invite_token} />
    </Layout>
  );
};

export default RecoveryPage;
