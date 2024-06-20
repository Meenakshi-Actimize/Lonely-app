import React, { lazy, Suspense } from 'react';

// Lazy load components
const Navbarcomp = React.lazy(() => import('../Component/Navbarcomp'));
const Planvideo = React.lazy(() => import('../Component/Planvideo'));
const ContinueSwiper = React.lazy(() => import('../Component/ContinueSwiper'));
const Plansidetext = React.lazy(() => import('../Component/Plansidetext'));
const Planningcard = React.lazy(() => import('../Component/Planningcard'));
const Planningcard2 = React.lazy(() => import('../Component/Planningcard2'));
const Planbanner = React.lazy(() => import('../Component/Planbanner'));
const Planyourdest = React.lazy(() => import('../Component/Planyourdest'));
const Planpiechart = React.lazy(() => import('../Component/Planpiechart'));
const Plantextoverlay = React.lazy(() => import('../Component/Plantextoverlay'));
const Plansignup = React.lazy(() => import('../Component/Plansignup'));
const Footercomp = React.lazy(() => import('../Component/Footer'));
const Lastcomp = React.lazy(() => import('../Component/Lastcomp'));

const Planning = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Navbarcomp />
            <Planvideo />
            <ContinueSwiper />
            <Plansidetext />
            <Planningcard />
            <Planningcard2 />
            <Planbanner />
            <Planyourdest />
            <Planpiechart />
            <Plantextoverlay />
            <Plansignup />
            <Footercomp />
            <Lastcomp />
        </Suspense>
    );
}

export default Planning;
