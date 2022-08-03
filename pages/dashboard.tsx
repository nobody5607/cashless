import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";


/** i18n */
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from "next/link";
import React from "react";
import { getProfile } from "services/service";
import { Profile } from "@/models/user.model";


const Dashboard: NextPage = ({ }) => {
    const [user, setUser] = React.useState<Profile>();
    const getProfileFunc = async () => {
        try {
            const result = await getProfile();
            setUser(result as Profile);
        } catch ({ message }) {

        }
    };
    React.useEffect(() => {
        getProfileFunc();
    }, []);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-10">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="">ยอดรายได้ปัจจุบัน</div>
                                    <h2 className="">{user?.amount}</h2>
                                    <div>{user?.full_name}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="row">
                                <div className="col-6 d-grid gap-2">
                                    <Link href={'/deposit'}>
                                        <a className="btn btn-success btn-lg rounded-pill">ฝากเงิน</a>
                                    </Link>
                                </div>
                                <div className="col-6 d-grid gap-2">
                                    <Link href={'/withdraw'}>
                                        <a className="btn btn-danger btn-lg rounded-pill">ถอนเงิน</a>
                                    </Link>
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
export default Dashboard;


