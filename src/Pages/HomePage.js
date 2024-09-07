import Field from "../Components/FormDiv/Field";
import Layout from "../Components/Layout/Layout";
import PageTitle from "../Components/PageTitle/PageTitle";
import getMessage from "../Components/Message/message";
import "./HomePage.css";
const Homepage = () => {
  return (
    <Layout>
      <PageTitle title={getMessage("Authenticated")} />
      <p></p>
      <div className="Home-div">
        <Field label={"First Name "} style={{ margin: "20px 0" }} />
        &nbsp;&nbsp;&nbsp;
        <Field label={"Last Name "} />
      </div>
      <div className="Home-div">
        &nbsp;&nbsp;&nbsp;
        <Field
          label={"Email "}
          style={{ marginLeft: "-12px", paddingRight: "-10px" }}
        />
        &nbsp;&nbsp;&nbsp;
        <Field label={"Phone "} />
      </div>
    </Layout>
  );
};

export default Homepage;
