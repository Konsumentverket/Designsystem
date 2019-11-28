/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
        return <svg className={className} css={style} width="32px" height="32px" viewBox="0 0 32 32" {...otherAttr}>
                <title>{title}</title>
                <g stroke="none" stroke-width="1">
    <g transform="translate(-584.000000, -1463.000000)">
        <path d="M615.560687,1475.46014 L614.146499,1474.04595 C613.560686,1473.46014 612.610936,1473.46014 612.025186,1474.04595 L611.671623,1474.39951 L604.600494,1467.32847 L604.954057,1466.97491 C605.53987,1466.3891 605.53987,1465.43935 604.954057,1464.8536 L603.539869,1463.43936 C602.954056,1462.85355 602.004306,1462.85355 601.418555,1463.43936 L593.640364,1471.21752 C593.054551,1471.80333 593.054551,1472.75308 593.640364,1473.33883 L595.054552,1474.75301 C595.640365,1475.33882 596.590116,1475.33882 597.175866,1474.75301 L597.529428,1474.39945 L600.004305,1476.87432 L594.939302,1481.9393 L594.58574,1481.58574 C593.804677,1480.80468 592.538364,1480.80468 591.757301,1481.58574 L584.585797,1488.75735 C583.804734,1489.53841 583.804734,1490.80472 584.585797,1491.58578 L587.414236,1494.4142 C588.195299,1495.19527 589.461612,1495.19527 590.242675,1494.4142 L597.414241,1487.24266 C598.195304,1486.4616 598.195304,1485.19529 597.414241,1484.41423 L597.060678,1484.06067 L602.125681,1478.99569 L604.600557,1481.47056 L604.246994,1481.82412 C603.661181,1482.40993 603.661181,1483.35967 604.246994,1483.94542 L605.661182,1485.35961 C606.246995,1485.94542 607.196746,1485.94542 607.782496,1485.35961 L615.560687,1477.58144 C616.146438,1476.99569 616.146438,1476.04595 615.560687,1475.46014 L615.560687,1475.46014 Z" id="Path"></path>
    </g>
</g>
        </svg>;
}




