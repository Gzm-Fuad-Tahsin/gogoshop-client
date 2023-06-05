import React from 'react';
import BreadCrumbItem from './BreadCrumbItem';

const PageTitleBreadCrumb = ({ data }) => {
    // takes an array of the path and give arrow among them 
    return (
        <nav className="pl-1 md:pl-5 pt-1 md:pt-3 flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {
                    data.length > 0 && data.map((item, _IDX) => <BreadCrumbItem key={_IDX} title={item} />)
                }
            </ol>
        </nav>
    );
};

export default PageTitleBreadCrumb;