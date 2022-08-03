//  import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";


/** i18n */
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from "next/link";

const Withdraw: NextPage = ({ }) => {
    const { locale } = useRouter();
    const { t } = useTranslation('home');
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <Link href={'/dashboard'}>
                        <a href="">ย้อนกลับ</a></Link>
                </div>
                <div className="col-12 text-center" style={{ color: '#fff' }}>
                    <h5 className="">ถอนเครดิต</h5>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="card">
                        <div className="card-body">

                            <div className="text-center">
                                <div>
                                    รายละเอียดบัญชีลูกค้า
                                </div>
                                <div>
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
                                <div>
                                    ยอดเงินที่ถอนได้
                                </div>
                                <div>

                                    <h1>0.00</h1>
                                    <div className="text-denger">**ถอนขั้นต่ำ 100 บาท**</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <input type="number" className="form-control" placeholder="กรอกจำนวนเงิน" />
                    </div>

                    <div className="mt-3 d-grid gap-2">
                        <button className="btn btn-primary btn-lg rounded-pill">แจ้งถอน</button>
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
export default Withdraw;


