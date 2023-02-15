import React from 'react';
import { Loader, LoaderSize } from '../Loader/Loader';

export type WithLoaderProps = React.PropsWithChildren<{
    loading: boolean;
    size?: LoaderSize;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({ children, loading = true, size = LoaderSize.m }) => {
    return (
        <React.Fragment>
            {children}
            {loading && <Loader loading={loading} size={size} />}
        </React.Fragment>
    );
};

export default WithLoader;