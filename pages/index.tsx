//  import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";


/** i18n */
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from "next/link";

const Home: NextPage = ({ }) => {
  const { locale } = useRouter();
  const { t } = useTranslation('home');
  return (


    <div>
      ok {t('home')}
    </div>


  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['home']))
    }
  };
};
export default Home;


