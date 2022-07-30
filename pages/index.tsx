//  import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Layout from "@/components/layouts/Layout";
import SliderImage from "@/components/Home/SliderImage";
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


    <div className=" d-flex justify-content-center align-items-center align-self-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title text-center mb-3">KKU CASHLESS</h5>
                
                <div className="d-flex justify-content-center">
                  <Link href={'/student/login'}>
                    <a className="card-link btn">สำหรับนักศึกษา</a>

                  </Link>
                  <Link href={'/staff'}>
                    <a className="card-link btn">สำหรับเจ้าหน้าที่</a></Link>
                </div>


              </div>
            </div>

          </div>
        </div>
      </div>
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


