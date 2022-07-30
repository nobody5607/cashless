import React, { useEffect, useState } from 'react';
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Queue from '@/components/Queue/Queue';
const PreviewQueue: NextPage = () => {
    const { t } = useTranslation('about');
    return (
        <>
            <div className="">

                <div className="row p-3 justify-content-end" id='container'>

                    <div className="col-md-6 mt-3 ">
                        <div className="card">
                            <div className="card-body">
                                <Queue />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                #container {
                  background-image:url(https://img.freepik.com/premium-photo/khon-kaen-university_34543-145.jpg);
                   height:100vh;
                   background-attachment: fixed;
                   background-size: contain;
                   
                }
                
            `}</style>
        </>
    );
};


export const getStaticProps: GetStaticProps = async (context) => {
    const { locale } = context;
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['about']))
        }
    };
};
export default PreviewQueue;