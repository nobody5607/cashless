//  import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";


/** i18n */
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from "next/link";

const Deposit: NextPage = ({ }) => {
    const { locale } = useRouter();
    const { t } = useTranslation('home');
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <Link href={'/dashboard'}>
                        <a href="">ย้อนกลับ</a></Link>


                </div>
                <div className="col-12 text-center mb-3" style={{ color: '#fff' }}>
                    <h3 >เงินเข้าภายใน 5 วินาที</h3>
                    <label>
                        โปรดใช้บัญชีนี้ของท่านโอนฝากเท่านั้น เพียงแค่กดปุ่ม <b>ยืนยันการโอนแล้ว</b> เงินจะเข้าภายใน 5 วินาที
                    </label>


                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8">

                    <div className="card">
                        <div className="card-body">

                            <div className="text-center">
                                <h5 className="mb-3">
                                    รายละเอียดบัญชีลูกค้า
                                </h5>
                                <div>
                                    <div className="text-center">
                                        Logo
                                    </div>
                                    <div>กรุงเทพ</div>
                                    <div>123212211</div>
                                    <div>คุณ มโนกฤตย์ จิตตรัชตะกาญจน์</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="text-center">
                                <div className="text-center">
                                    Logo
                                </div>
                                <div>
                                    รายละเอียดบัญชีฝาก
                                </div>
                                <div className="mt-3">

                                    <h5>ไทยพาณิชย์</h5>
                                    <div className="text-denger">นาย ABC</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-primary btn-lg rounded-pill">ยืนยันการโอน</button>
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
export default Deposit;


