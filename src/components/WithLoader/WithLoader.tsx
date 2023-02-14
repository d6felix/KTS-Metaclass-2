import React from 'react';
import { Loader } from '../Loader/Loader';

export type WithLoaderProps = React.PropsWithChildren<{
    loading: boolean;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({ children, loading = true }) => {
    return (
        <React.Fragment>
            {loading && <Loader loading={loading} />}
            {children}
        </React.Fragment>
    );
};

export default WithLoader;