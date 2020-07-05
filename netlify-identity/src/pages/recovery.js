import React from "react";

import Layout from "components/Layout";
import {RecoveryForm} from "components/Form/recovery"

const RecoveryPage = props => {
  const [recovery_token, set_recovery_token] = React.useState("");

  React.useEffect(() => {
    const url = new URL(window.location.href.replace(/#/g, "?"));
    const token = url.searchParams.get("recovery_token");

    set_recovery_token(token);
  }, []);

  return (
    <Layout pageTitle='Recovery' pageDescription='' {...props}>
      <RecoveryForm recoveryToken={recovery_token} />
    </Layout>
  );
};

export default RecoveryPage;
