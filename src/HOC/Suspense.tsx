import React, {ComponentType} from "react";
import {Preloader} from "../components/SmallComponents/Preloader/Preloader";

export function SuspenseFunc<T>(Component: ComponentType<T>) {
    return (props: any) => {
        return <React.Suspense fallback={<Preloader />}>
            <Component {...props as T}/>
        </React.Suspense>
    }
}