import React from 'react';
import { useParams } from 'react-router-dom';

const Admin_subcategoryEdit = () => {
    const {subcategory_slug} = useParams();
    return (
        <div>
            {subcategory_slug}
        </div>
    );
};

export default Admin_subcategoryEdit;