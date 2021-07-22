import React from "react";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents/index"
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
    </Layout>
  );
}

export default Home;